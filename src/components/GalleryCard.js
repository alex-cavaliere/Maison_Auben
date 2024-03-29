import { Link } from "react-router-dom";

function GalleryCard(props){
    const { categories } = props
    const { title } = props
    return (
        <section className="gallery">
            <h5><span>•</span>{title}</h5>
            <div className="gallery-wrapper">
                {
                    categories.map((img, index) => {
                        return <figure key={index} className="card">
                            <Link to={'/projets/' + img.id}><img src={img.portrait} alt={img.title + "-img"}></img></Link>
                        </figure>
                    })
                }
            </div>
        </section>        
    )
}

export default GalleryCard