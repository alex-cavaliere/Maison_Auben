
function Header(props){
    const logo = props.logo
    return( 
        <header className="App-header">
            <div className='logo-container'>
                <a href='/'>
                    <figure id='auben-logo'>
                        <img src={logo} className="App-logo" alt="header-logo" />
                        <figcaption>ARCHITECTES D'INTÉRIEUR & DÉCORATEURS</figcaption>
                    </figure>
                </a>
            </div>
            <div className='header-sub'>
                <p>AUDREY & BENJAMIN</p>
            </div>
        </header>
    )
} 

export default Header