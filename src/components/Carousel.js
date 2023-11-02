import { useState } from "react"
import chevronLeft from '../assets/chevron-left.svg'
import chevronRight from '../assets/chevron-right.svg'

function Carousel(props){
    const {pictures} = props

    console.log(pictures)
    return(
        <div className="carousel-wrapper">
            <img src={pictures} alt={pictures}></img>
        </div>
    )
}

export default Carousel