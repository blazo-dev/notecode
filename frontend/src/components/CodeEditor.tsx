import Editor from "@monaco-editor/react";
import "./CodeEditor.scss"
import Loader from "./Loader";

interface EditorProps {
    code: string;
    language: string;
    theme: string;
    onChange: (newCode: string) => void;
}


const CodeEditor = ({ code, language, theme, onChange }: EditorProps) => {

    return (
        <div className="code-editor">
            <Editor
                height="100%"
                width={"100%"}
                defaultLanguage={language}
                defaultValue={code}
                theme={theme}
                onChange={(value) => onChange(value || "")}
                options={{
                    fontSize: 12,
                    minimap: { enabled: true },
                    scrollbar: { vertical: "hidden", horizontal: "hidden" },
                    lineNumbers: "on",
                    padding: { top: 20, bottom: 20 },
                    wordWrap: "on",
                    automaticLayout: true
                }}
                loading={<Loader />}
            />
        </div>
    );
};

export default CodeEditor;
