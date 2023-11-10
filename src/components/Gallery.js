import GalleryCard from "./GalleryCard"
import Nav from "./Nav";
import { useEffect, useState } from "react";

function Gallery(){
    const [data, setData] = useState()
    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/data.json`)
        .then(async res => await res.json())
        .then(data => setData(data))
        .catch(err => console.log(err))
      },[])
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