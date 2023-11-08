import Nav from "./Nav"


function Gallery(){
    const projets = JSON.parse(localStorage.getItem("projets") || "[]");
    console.log(projets)
    return(
        <div id="gallery-container">
            <Nav/>
            <section className="gallery">
                <h5><span>•</span>PARTICULIERS</h5>
                <div className="gallery-wrapper">
                    {
                        projets.particulier.map((img, index) => {
                            return <figure key={index} className="card">
                                <img src={img.portrait} alt={img.title + "-img"}></img>
                            </figure>
                        })
                    }
                </div>
            </section>
        </div>
    )
}

export default Gallery