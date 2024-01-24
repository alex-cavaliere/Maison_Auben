/**
import { useEffect, useRef } from "react"

function Cursor() {
    const cursor = useRef(null)
    const cursorHover = useRef(null)
    console.log(cursor.current)
    useEffect(() => {
        if(cursor.current !== null && cursorHover.current !== null){
            const positionMouse = (e) => {
                const mouseX = e.clientX
                const mouseY = e.clientY
                cursor.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
                cursorHover.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
            }
            window.addEventListener('mousemove', positionMouse)
        }
    }, [])
    return(
        <>
            <div ref={cursor} className="cursor"></div>
            <div ref={cursorHover} className="cursor active"></div>
        </>
    )
}

export default Cursor
 */