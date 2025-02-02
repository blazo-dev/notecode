import './Header.scss'
import Hero from './Hero'


function Header() {
    return (
        <header className='header'>
            <img src="/logo.svg" alt="NoteCode Logo" />
            <div className="header__content">
                <h1 className='header__title'>Create & Share</h1>
                <h2 className='header__subtitle'>Your Code Easily</h2>
            </div>
            <Hero />
        </header>
    )
}

export default Header