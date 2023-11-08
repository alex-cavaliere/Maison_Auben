
function Footer(props){
    const { logo } = props
    return(
    <   footer>
            <figure id='auben-footer'>
                <img src={logo} alt='footer-logo'/>
                <figcaption>AUDREY & BENJAMIN</figcaption>
            </figure>
        </footer>
    )
}

export default Footer