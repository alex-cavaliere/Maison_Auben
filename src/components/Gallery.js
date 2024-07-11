import GalleryCard from "./GalleryCard"
import Nav from "./Nav";
import { DataContext } from "../DataContext";
import { useState, useContext, useEffect } from "react";
/*
window.onload = () => {
    const headerSub = document.getElementsByClassName('header-sub')
    headerSub[0].style.display = 'block'
}

aggiungere il campo ID ad ogni collection del progetto
*/
function Gallery(){
    const [isLoading, setIsLoading] = useState(true)
    const data = useContext(DataContext)
    const projets = JSON.parse(localStorage.getItem("imgCollection") || "[]");
    let imagesLoadedCount = 0
    useEffect(() => {
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
    },[])
    //console.log(data)
    return(
        data && (<div id="gallery-container">
            <div className="gallery-nav">
                <Nav/>
                <div className='line-3'></div>
            </div>
               {
                    !isLoading || data ? (
                        <div className="gallery-items">
                            <GalleryCard categories={data.ptc} title='PARTICULIER'/>
                            <GalleryCard categories={data.pfs} title='PROFESSIONNEL'/>
                            <GalleryCard categories={data.pmt} title='PROMOTION'/>
                        </div>) : (<div className="gallery-loader"></div>)
               }
        </div>)
    )
}

export default Gallery