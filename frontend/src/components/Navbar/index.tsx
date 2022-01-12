import { ReactComponent as GithubIcon } from 'assets/img/githubIcon.svg'
import "./styles.css";

function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="slaamovie-nav-content">
                    <h1>Filmes by Samuel</h1>
                    <a href="https://github.com/samuelevi87/slaaMovie" target="_blank" rel="noreferrer">
                        <div className="slaamovie-contact-container">
                            <GithubIcon />
                            <p className="slaamovie-contact-link">/samuelevi87</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;