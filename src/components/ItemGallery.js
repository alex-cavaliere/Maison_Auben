import { useParams } from "react-router-dom"
import Nav from "./Nav"
import { useEffect, useState } from "react";

function ItemGallery(){
    const [data, setData] = useState()
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
    return(
        data && (
            <div id='item-gallery'>
            <Nav />
            <section>
                <h1>{data.title}</h1>
                <div className='item-container'>
                    {
                        data.images.map((img, index) => {
                            return <figure key={index}>
                                <img src={img} alt={data.title}/>
                            </figure>
                        })
                    }
                </div>
            </section>
        </div>
        )
    )
}

export default ItemGallery