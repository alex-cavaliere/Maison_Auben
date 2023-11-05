
function CarouselItem(props){
    const {pictures} = props

    return(
        <div className="carousel-wrapper">
            <img src={pictures} alt={pictures}></img>
        </div>
    )
}

export default CarouselItem