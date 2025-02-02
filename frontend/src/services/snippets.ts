import axios from "axios";

const API_URL = "http://127.0.0.1:5000/api/snippets";


export const getSnippet = async ({snippetId}: { snippetId: string }) => {
    const response = await axios.get(`${API_URL}/${snippetId}`);
    return response.data;
};

interface CreateSnippet {
    currentCode: string
    language: string
    theme: string

}

export const createSnippet = async ({currentCode, language, theme}: CreateSnippet) => {
    const response = await axios.post(API_URL, {
        code: currentCode,
        language,
        theme,
    });
    return response.data.id;
};

interface UpdateSnippet {
    snippetId: string;
    currentCode?: string
    language?: string
    theme?: string
}

export const updateSnippet = async ({snippetId, currentCode: code, language, theme}: UpdateSnippet) => {
    if (!snippetId) return;
    await axios.put(`${API_URL}/${snippetId}`, {
        code,
        language,
        theme,
    });
};