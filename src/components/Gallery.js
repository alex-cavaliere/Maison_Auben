import GalleryCard from "./GalleryCard"
import Nav from "./Nav";
import { DataContext } from "../DataContext";
import { useState, useContext } from "react";
/*
window.onload = () => {
    const headerSub = document.getElementsByClassName('header-sub')
    headerSub[0].style.display = 'block'
}

aggiungere il campo ID ad ogni collection del progetto
*/
function Gallery(){
    const [isLoading, setIsLoading] = useState(true)
    const prova = useContext(DataContext)
    const projets = JSON.parse(localStorage.getItem("imgCollection") || "[]");
    let imagesLoadedCount = 0
    projets.forEach((image) => {
        //console.log(image.attributes.portrait.data.attributes.url)
        const link = document.createElement('link')
        link.rel = 'preload'
        link.as = 'image'
        link.href = image.attributes.portrait.data.attributes.url
        link.onload = () => {
            imagesLoadedCount++;
            if (imagesLoadedCount === projets.length) {
              // Tutte le immagini sono state precaricate
              setIsLoading(false)
            }
          };
        document.head.appendChild(link)
    })
    //console.log(prova)
    return(
        prova && (<div id="gallery-container">
            <div className="gallery-nav">
                <Nav/>
                <div className='line-3'></div>
            </div>
               {
                    !isLoading ? (
                        <div className="gallery-items">
                            <GalleryCard categories={prova.ptc} title='PARTICULIER'/>
                            <GalleryCard categories={prova.pfs} title='PROFESSIONNEL'/>
                            <GalleryCard categories={prova.pmt} title='PROMOTION'/>
                        </div>) : (<div className="gallery-loader"></div>)
               }
        </div>)
    )
}

export default Gallery