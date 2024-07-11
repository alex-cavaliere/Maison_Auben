import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

function Header(props){
    const logo = props.logo
    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => {
        window.onresize = () => {
            const screenWidth = window.screen.width
            if(screenWidth >= 800){
                setIsOpen(false)
            }
        }
    },[])
    const ToggleMenu = () => {
        setIsOpen(!isOpen)
    }
    const closeMenu = () => {
        setIsOpen(false)
    }
    return( 
        <header className="App-header">
            <div className='logo-container'>
                <NavLink to='/'>
                    <figure id='auben-logo'>
                        <img src={logo} className="App-logo" alt="header-logo" />
                        <figcaption>ARCHITECTES D'INTÉRIEUR & DÉCORATEURS</figcaption>
                    </figure>
                </NavLink>
            </div>
            <nav className={`mobile-nav ${isOpen ? 'show' : ''}`}>
                <ul>
                    <li><NavLink to='/projets' onClick={closeMenu}>PROJETS</NavLink></li>
                    <li><a href='/#agence' onClick={closeMenu}>L'AGENCE</a></li>
                    <li><a href='/#contact' onClick={closeMenu}>CONTACT</a></li>
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