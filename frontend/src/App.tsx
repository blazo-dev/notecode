import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss'
import SnippetPage from './pages/SnippetPage'
import Header from "./components/Header";

function App() {

    return (
        <main className='main'>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SnippetPage />} />
                    <Route path="/:snippetId" element={<SnippetPage />} />
                </Routes>
            </BrowserRouter>
        </main>
    )
}

export default App
