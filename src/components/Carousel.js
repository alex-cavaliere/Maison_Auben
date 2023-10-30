import { useState } from "react"
import chevronLeft from '../assets/chevron-left.svg'
import chevronRight from '../assets/chevron-right.svg'

function Carousel(props){
    const [imgIndex, setImgIndex] = useState(0)
    const {pictures} = props
    const [firstPic] = useState(pictures[imgIndex])
    //console.log(imgIndex)
    const nextPic = () => {
        if(imgIndex < pictures.length - 1){
            setImgIndex(imgIndex + 1)
        }else{
            setImgIndex(0)
        }
    }
    const prevPic = () => {
        if(imgIndex > 0){
            setImgIndex(imgIndex - 1)
        }else{
            setImgIndex(pictures.length - 1)
        }
    }
    return(
        <div className="carousel">
            <img src={pictures[imgIndex]} alt={'photo_' + imgIndex}/>
            {pictures.length > 1 && <div className='controls'> 
                <div className='carousel-controls'>
                    <img src={chevronLeft} alt='chevronLeft' onClick={prevPic}></img>
                    <img src={chevronRight} alt='chevronRight' onClick={nextPic}></img>
                </div>
                <div className="btn-container"><button className="carousel-btn">DÉCOUVRIR</button></div>
                <div className='carousel-counter'>{imgIndex + 1} / {pictures.length}</div>
            </div>
            }
        </div>
    )
}

export default Carousel