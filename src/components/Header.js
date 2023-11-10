import { useState } from "react"


function Header(props){
    const logo = props.logo
    const [isOpen, setIsOpen] = useState(false)

    const ToggleMenu = () => {
        setIsOpen(!isOpen)
    }
    return( 
        <header className="App-header">
            <div className='logo-container'>
                <a href='/Maison_Auben'>
                    <figure id='auben-logo'>
                        <img src={logo} className="App-logo" alt="header-logo" />
                        <figcaption>ARCHITECTES D'INTÉRIEUR & DÉCORATEURS</figcaption>
                    </figure>
                </a>
            </div>
            <nav className={`mobile-nav ${isOpen ? 'show' : ''}`}>
                <ul>
                    <a href='/Maison_Auben/projets'><li>PROJETS</li></a>
                    <a href='/Maison_Auben#agence'><li>L'AGENCE</li></a>
                    <a href='/Maison_Auben#contact'><li>CONTACT</li></a>
                </ul>
            </nav>
            <button onClick={ToggleMenu} className={`mobile-toggle ${isOpen ? 'open' : ''}`}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
            <div className='header-sub'>
                <p>AUDREY & BENJAMIN</p>
            </div>
        </header>
    )
} 

export default Header