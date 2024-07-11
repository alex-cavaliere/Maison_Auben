import logo from '../assets/animation_x2.avif'

function Loader() {
    return(<div className="loader" >
        <img data-testid='loader' src={logo} alt='logo-auben'/>
    </div>
    )
}

export default Loader