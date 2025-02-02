import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import CodeEditor from "../components/CodeEditor";
import {defaultSnippet} from "../utils/constants";
import axios from "axios";

function SnippetPage() {
    const {snippetId} = useParams();
    const [snippet, setSnippet] = useState(defaultSnippet);

    useEffect(() => {
        if (!snippetId) return;

        const fetchSnippet = async () => {
            try {
                const response = await axios.get(
                    `http://127.0.0.1:5000/api/snippets/${snippetId}`
                );
                setSnippet(response.data);
            } catch (error) {
                console.error("Error fetching snippet:", error);
            }
        };

        fetchSnippet()

    }, [snippetId]);

    const handleCodeChange = (newCode: string) => {
        setSnippet((prevSnippet) => ({
            ...prevSnippet,
            code: newCode,
        }));
    };

    return (
        <CodeEditor
            language={snippet.language}
            theme={`vs-${snippet.theme}`}
            code={snippet.code}
            onChange={handleCodeChange}
        />);
}

export default SnippetPage;
