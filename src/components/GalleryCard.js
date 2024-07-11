import { Link } from "react-router-dom";

function GalleryCard(props){
    const { categories } = props
    const { title } = props
    return (
        categories.data && <section className="gallery">
            <h5><span>•</span>{title}</h5>
            <div className="gallery-wrapper">
                {
                    categories.data.map((img, index) => {
                        return <figure key={index} className="card">
                            <Link to={'/projets/' + img.attributes.slug}><img src={img.attributes.portrait.data.attributes.url} alt={img.attributes.title + "-img"}></img></Link>
                        </figure>
                    })
                }
            </div>
        </section>        
    )
}

export default GalleryCard