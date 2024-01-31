import GalleryCard from "./GalleryCard"
import Nav from "./Nav";
import data from "../data/data.json";
import { useState } from "react";
/*
window.onload = () => {
    const headerSub = document.getElementsByClassName('header-sub')
    headerSub[0].style.display = 'block'
}
*/
function Gallery(){
    const [isLoading, setIsLoading] = useState(true)
    const projets = JSON.parse(localStorage.getItem("imgCollection") || "[]");
    let imagesLoadedCount = 0
    projets.forEach((image) => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.as = 'image'
        link.href = image.portrait
        link.onload = () => {
            imagesLoadedCount++;
            if (imagesLoadedCount === projets.length) {
              // Tutte le immagini sono state precaricate
              setIsLoading(false)
            }
          };
        document.head.appendChild(link)
    })
    return(
        data && (<div id="gallery-container">
            <div className="gallery-nav">
                <Nav/>
                <div className='line-3'></div>
            </div>
                {
                    !isLoading ? (
                        <div className="gallery-items">
                            <GalleryCard categories={data.projets.particulier} title='PARTICULIER'/>
                            <GalleryCard categories={data.projets.professionnel} title='PROFESSIONNEL'/>
                            <GalleryCard categories={data.projets.promotion} title='PROMOTION'/>
                        </div>) : (<div className="gallery-loader"></div>)
                }
        </div>)
    )
}

export default Gallery