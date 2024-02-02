import { useState, useEffect } from 'react';
import BasicCard from '../components/Card';
import Quote from './Quote';
import cube1 from '../assets/cube 1.png'
import cube2 from '../assets/cube 2.png'
import cube3 from '../assets/cube 3.png'
import quoteLeft from '../assets/quote.svg'
import quoteRight from '../assets/quote-mirror.svg'

function Agence(props){
    const {quotes, maisonParags, etapesParags} = props
    const [currentIndex, setCurrentIndex] = useState(0)
    useEffect(() => {
        const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        }, 7000);
        return () => {
            clearInterval(intervalId);
          };
    }, [quotes.length]);
    const prevQuote = () => {
        setCurrentIndex(currentIndex - 1)
    }
    const nextQuote = () => {
        setCurrentIndex(currentIndex + 1)
    }
    if(currentIndex < 0){
        setCurrentIndex(currentIndex + 1)
    }
    if(currentIndex >= quotes.length){
        setCurrentIndex(currentIndex - 1)
    }
    const listStep_1 = ['PRISE DE CÔTE', 'PLAN DES ÉTATS DES LIEUX', 'PLAN PROJETS', 'VISUEL 3D MAQUETTE BLANCHE']
    const listStep_2 = ['RÉALISATION DES PLANS TECHNIQUES', 'PERSPECTIVE 3D COULEURS', 'CHOIX DES MATÉRIAUX', 'CHOIX DU MOBILIERS']
    const listStep_3 = ['CONSULTATION DES ENTREPRISES', 'PLANNING DES TRAVAUX', 'SUIVI DE CHANTIER', 'RÉCEPTION DES OUVRAGES']
    return(
        <section id="agence">
            <div className='agence-article'>
                <aside className='nav-wrapper'>
                    <ul className='internal-link'>
                        <li className='line-2'></li>
                        <li className='section-title'>L'AGENCE</li>
                        <li className='line-2'></li>
                    </ul>
                </aside>
                <article className='description-container'>
                    <div className='description'>
                    <div className='text'>
                        <h2 className='article-head'>MAISON AUBÈN</h2>
                        {
                        maisonParags.map((parag, index) => {
                            return <div className='maison-section' key={index}> 
                            <ul className="maison-parag">
                                <li>{parag.title}</li>
                            </ul>
                            <p className='maison-text'>{parag.text}</p>
                            </div>
                        })
                        }
                    </div>
                    <img src='https://static.wixstatic.com/media/3f174c_c1a61b1d06c2414eaaa1c874b28cb7a0~mv2.jpg/v1/fill/w_390,h_489,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/33dfe90304eb8b9d04849e26505b4016.jpg' alt='Auben'/>
                    </div>
                    <div className='steps'>
                    <h3>LES DIFFÉRENTES ÉTAPES</h3>
                    <p className='steps-description'>{etapesParags}</p>
                    <div className='card-wrapper'>
                        <div className='card-container'>
                        <BasicCard list={listStep_1} cube={cube1}/>
                        </div>
                        <div className='arrow'><span><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg></span></div>
                        <div className='card-container'>
                        <BasicCard list={listStep_2} cube={cube2}/>
                        </div>
                        <div className='arrow'><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg></div>
                        <div className='card-container'>
                        <BasicCard list={listStep_3} cube={cube3}/>
                        </div>
                    </div>
                    <div className='quotes-container'>
                        <span className='quote-icon'><img src={quoteLeft} alt='quote-img'/></span>
                        <Quote quotes={quotes} currentIndex={currentIndex}/> 
                        <span className='quote-icon'><img src={quoteRight} alt='quote-img'/></span>
                        <div className='controls-container'>
                            {
                                quotes.map((quote, index) => {
                                    return <span key={`quote-${index}`} onClick={currentIndex === 0 && currentIndex <= quotes.length ? nextQuote : prevQuote} className={`control ${index === currentIndex ? 'active' : ''}`}><span></span></span>
                                })
                            }
                        </div>
                    </div>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Agence