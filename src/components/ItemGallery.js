import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import { useParams } from "react-router-dom"
import Nav from "./Nav"
import { useEffect, useState } from "react";

function ItemGallery(){
    const [data, setData] = useState()
    const [isOpen, setIsOpen] = useState(false)
    const [imgIndex, setImgIndex] = useState(0)
    const projets = JSON.parse(localStorage.getItem("imgCollection") || "[]");
    const {id} = useParams()
    useEffect(() => {
        const headerSub = document.getElementsByClassName('header-sub')
        headerSub[0].style.display = 'none'
        projets.map(projet => {
            if(projet.id === id){
                setData(projet)
            }
            return data
        })
    },[id])
    const openLightBox = () => {
        setIsOpen(!isOpen)
    }
    const updateIndex = ({index: current}) => setImgIndex(current)
    //console.log(imgIndex)
    return(
        data && (
            <div id='item-gallery'>
                <div className='item-nav'>
                    <Nav />
                    <div className="line-3"></div>
                </div>
                <section>
                    <h1 className='item-title'>{data.title}</h1>
                    <div className='item-container'>
                        {
                            data.images.map((img, idx) => {
                                return <figure onClick={openLightBox} className={"image-" + idx} key={idx}>
                                    <img src={img} alt={data.title}/>
                                </figure>
                            })
                        }
                    </div>
                </section>
                <Lightbox 
                index={imgIndex}
                open={isOpen}
                close={() => setIsOpen(false)}
                slides={data.images.map(img => {
                    return {src:img}
                })}
                on={{
                    view: updateIndex,
                    }}
                plugins={[Captions, Fullscreen, Slideshow, Video, Zoom]}
                />
            </div>
        )
    )
}

export default ItemGallery