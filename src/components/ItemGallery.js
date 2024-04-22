import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import { useParams } from "react-router-dom"
import Nav from "./Nav"
import { DataContext } from "../DataContext";
import { useEffect, useState, useContext} from "react";

function ItemGallery(){
    const [data, setData] = useState()
    const [isOpen, setIsOpen] = useState(false)
    const [imgIndex, setImgIndex] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const prova = useContext(DataContext) 
    const projets = JSON.parse(localStorage.getItem("imgCollection") || "[]");
    const {id} = useParams()
    //console.log(projets)
    useEffect(() => {
        const headerSub = document.getElementsByClassName('header-sub')
        headerSub[0].style.display = 'none'
        projets.map(projet => {
            if(projet.attributes.slug === id){
                setData(projet.attributes)
            }
            return data
        })
    },[id])
    const updateIndex = ({index: current}) => setImgIndex(current)
    const openLightBox = (e) => {
        const index = parseInt(e.target.getAttribute('index'))
        setImgIndex(index)
        setIsOpen(!isOpen)
    }
    //console.log(data, prova)
    //console.log(imgIndex)
    let imagesLoadedCount = 0
    if(data){
        data.images.data.forEach((image) => {
            const link = document.createElement('link')
            link.rel = 'preload'
            link.as = 'image'
            link.href = image.attributes.url
            link.onload = () => {
                imagesLoadedCount++;
                if (imagesLoadedCount === data.images.length) {
                  // Tutte le immagini sono state precaricate
                  setIsLoading(false)
                }
              };
            
            document.head.appendChild(link)
        })
    }
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
                            data.images.data.map((img, idx) => {
                                return <figure onClick={(e) => openLightBox(e)} className={"image-" + idx} key={idx}>
                                    <img index={idx} src={img.attributes.url} alt={data.title}/>
                                </figure>
                            })
                        }
                    </div>
                </section>
                <Lightbox 
                index={imgIndex}
                open={isOpen}
                close={() => setIsOpen(false)}
                slides={data.images.data.map(img => {
                    return {src:img.attributes.url}
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