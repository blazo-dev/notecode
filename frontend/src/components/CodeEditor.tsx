import Editor from "@monaco-editor/react";
import "./CodeEditor.scss";
import Loader from "./Loader";
import ShareButton from "./ShareButton";
import {useState} from "react";
import {createSnippet, updateSnippet} from "../services/snippets.ts";

interface CodeEditorProps {
    code: string;
    language: string;
    theme: string;
    snippetId?: string;
    onChange: (newCode: string) => void;
}

function CodeEditor({code, language, theme, snippetId, onChange}: CodeEditorProps) {
    const [currentCode, setCurrentCode] = useState(code);
    const [shareURL, setShareURL] = useState<string | null>(null);
    const [isSharing, setIsSharing] = useState(false);

    const handleShare = async () => {
        setIsSharing(true);
        try {
            if (currentCode === code) return;

            const newSnippetId: string = await (snippetId ? updateSnippet({
                snippetId,
                currentCode
            }) : createSnippet({currentCode, theme, language}));
            setShareURL(`${window.location.origin}/snippets/${newSnippetId}`);
        } catch (error) {
            console.error("Error al compartir el snippet:", error);
        } finally {
            setIsSharing(false);
        }
    };

    return (
        <section className="code-editor">
            <Editor
                height="100%"
                width="100%"
                language={language}
                theme={theme}
                value={code}
                options={{
                    fontSize: 12,
                    minimap: {enabled: true},
                    scrollbar: {vertical: "hidden", horizontal: "hidden"},
                    lineNumbers: "on",
                    padding: {top: 20, bottom: 20},
                    wordWrap: "on",
                    automaticLayout: true,
                }}
                onChange={(value) => onChange(value || "")}
                loading={<Loader/>}
            />
            <footer className="code-editor__footer">
                <ShareButton onClick={handleShare} isDisabled={isSharing || code === currentCode}/>
                {shareURL && <span className="code-editor__url">{shareURL}</span>}
            </footer>
        </section>
    );
}

export default CodeEditor;
