
function CarouselItem(props){
    const {pictures} = props

    console.log(pictures)
    return(
        <div className="carousel-wrapper">
            <img src={pictures} alt={pictures}></img>
        </div>
    )
}

export default CarouselItem