import { createContext, useState, useEffect } from "react";


export const DataContext = createContext()

export const DataProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [articles, setArticles] = useState([])
    const [quotes, setQuotes] = useState([])
    const [steps, setSteps] = useState([])
    const [gallery, setGallery] = useState([])
    const [ptc, setPtc] = useState([])
    const [pfs, setPfs] = useState([])
    const [pmt, setPmt] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try{
                const [resArticles, resQuotes, resSteps, resGallery, resPtc, resPfs, resPmt] = await Promise.all([
                    fetch('https://maison-auben-9f83a3df05ac.herokuapp.com/api/articles'),
                    fetch('https://maison-auben-9f83a3df05ac.herokuapp.com/api/commentaires'),
                    fetch('https://maison-auben-9f83a3df05ac.herokuapp.com/api/etapes'),
                    fetch('https://maison-auben-9f83a3df05ac.herokuapp.com/api/galleries?populate=*'),
                    fetch('https://maison-auben-9f83a3df05ac.herokuapp.com/api/particuliers?populate=*'),
                    fetch('https://maison-auben-9f83a3df05ac.herokuapp.com/api/professionnelles?populate=*'),
                    fetch('https://maison-auben-9f83a3df05ac.herokuapp.com/api/promotions?populate=*') 
                ])
                const dataArticles = await resArticles.json()
                const dataQuotes = await resQuotes.json()
                const dataSteps = await resSteps.json()
                const dataGallery = await resGallery.json()
                const dataPtc = await resPtc.json()
                const dataPfs = await resPfs.json()
                const dataPmt = await resPmt.json()
                setArticles(dataArticles)
                setQuotes(dataQuotes)
                setSteps(dataSteps)
                setGallery(dataGallery)
                setPtc(dataPtc)
                setPfs(dataPfs)
                setPmt(dataPmt)
            }catch (err){
                return alert(err + " Errore nel caricamento delle risorse nel data context")
            }
        }
        fetchData()
        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
    },[])
    return(
        <DataContext.Provider value={{articles, quotes, steps, gallery, ptc, pfs, pmt, isLoading}}>
            {children}
        </DataContext.Provider>
    )
}
