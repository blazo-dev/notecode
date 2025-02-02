import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import CodeEditor from "../components/CodeEditor";
import {defaultSnippet} from "../utils/constants";
import {getSnippet} from "../services/snippets.ts";
import {Snippet} from "../interfaces/snippet.ts";

function SnippetPage() {
    const {snippetId} = useParams();
    const [snippet, setSnippet] = useState(defaultSnippet);

    const handleOnChange = (newCode: string) => {
        setSnippet((prevSnippet) => ({
            ...prevSnippet,
            code: newCode,
        }));
    };

    useEffect(() => {
        if (!snippetId) return;

        try {
            getSnippet({snippetId}).then((snippet: Snippet) => {
                setSnippet(snippet);
            })
        } catch (error) {
            console.error("Error fetching snippet:", error);
        }


    }, [snippetId]);


    return (
        <CodeEditor
            language={snippet.language}
            theme={snippet.theme}
            code={snippet.code}
            snippetId={snippetId}
            onChange={handleOnChange}
        />
    );
}

export default SnippetPage;
