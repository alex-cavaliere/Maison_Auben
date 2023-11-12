import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useParams } from "react-router-dom"
import Nav from "./Nav"
import { useEffect, useState } from "react";

function ItemGallery(){
    const [data, setData] = useState()
    const [isOpen, setIsOpen] = useState(false)
    const projets = JSON.parse(localStorage.getItem("imgCollection") || "[]");
    const {id} = useParams()
    useEffect(() => {
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
    console.log(data)
    return(
        data && (
            <div id='item-gallery'>
                <div className='item-nav'>
                    <Nav />
                    <div className="line-3"></div>
                </div>
                <section>
                    <h1>{data.title}</h1>
                    <div className='item-container'>
                        {
                            data.images.map((img, index) => {
                                return <figure onClick={openLightBox} key={index}>
                                    <img src={img} alt={data.title}/>
                                </figure>
                            })
                        }
                    </div>
                </section>
                <Lightbox 
                    open={isOpen}
                    close={() => setIsOpen(false)}
                    slides={data.images.map(imgUrl => {return {src: imgUrl}})}
                />
            </div>
        )
    )
}

export default ItemGallery