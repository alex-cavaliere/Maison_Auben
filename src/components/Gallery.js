import GalleryCard from "./GalleryCard"
import Nav from "./Nav";

function Gallery(){
    const projets = JSON.parse(localStorage.getItem("projets") || "[]");
    console.log(projets)
    return(
        <div id="gallery-container">
            <div className="gallery-nav">
                <Nav/>
                <div className='line-3'></div>
            </div>
            <div className="gallery-items">
                <GalleryCard categories={projets.particulier} title='PARTICULIER'/>
                <GalleryCard categories={projets.professionnel} title='PROFESSIONNEL'/>
                <GalleryCard categories={projets.promotion} title='PROMOTION'/>
            </div>
        </div>
    )
}

export default Gallery