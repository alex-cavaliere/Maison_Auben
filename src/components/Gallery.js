import GalleryCard from "./GalleryCard"
import Nav from "./Nav";
import data from "../data/data.json";
/*
window.onload = () => {
    const headerSub = document.getElementsByClassName('header-sub')
    headerSub[0].style.display = 'block'
}
*/
function Gallery(){
    return(
        data && (<div id="gallery-container">
            <div className="gallery-nav">
                <Nav/>
                <div className='line-3'></div>
            </div>
            <div className="gallery-items">
                <GalleryCard categories={data.projets.particulier} title='PARTICULIER'/>
                <GalleryCard categories={data.projets.professionnel} title='PROFESSIONNEL'/>
                <GalleryCard categories={data.projets.promotion} title='PROMOTION'/>
            </div>
        </div>)
    )
}

export default Gallery