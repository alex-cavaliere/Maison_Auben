
function CarouselItem(props){
    const {pictures} = props

    return(
        <img src={pictures} alt={pictures}/>
    )
}

export default CarouselItem