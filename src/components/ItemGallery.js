import { useParams } from "react-router-dom"
import Nav from "./Nav"

function ItemGallery(){
    const {id} = useParams()
    return(
        <div id='item-gallery'>
            <Nav />
            <section>
                <h1>Hello World!</h1>
            </section>
        </div>
    )
}

export default ItemGallery