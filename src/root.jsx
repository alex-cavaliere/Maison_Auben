import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import data from './data/data.json'
import { Carousel } from 'react-responsive-carousel';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Agence from './components/Agence';
import Form from './components/Form';
import formFoto from './assets/FormImage.jpg' 
import Nav from './components/Nav';
import Loader from './components/Loader';
import chevronLeft from './assets/chevron-left.svg'
import chevronRight from './assets/chevron-right.svg'
import CarouselItem from './components/Carousel';
import mainLogo from './assets/logo_auben_white.png'

function Root() {
    const onNavigate = useNavigate()
    const [isLoading, setIsLoading] = useState(true)
    const firstLoad = localStorage.getItem('firstLoad')
    if(firstLoad === null){
      localStorage.setItem('firstLoad', false)
    }else {
      localStorage.setItem('firstLoad', true)
    }
    const renderArrowPrev = (clickHandler, hasPrev) => {
    return (
      <div
        onClick={clickHandler}
        style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          transform: 'translateY(-50%)',
          zIndex: '1'
        }}
      >
        {hasPrev && <img src={chevronLeft} style={{width: '60px'}}  alt="Previous" />}
      </div>
    );
  };
  const renderArrowNext = (clickHandler, hasNext) => {
    return (
      <div
        onClick={clickHandler}
        style={{
          position: 'absolute',
          top: '50%',
          right: 0,
          transform: 'translateY(-50%)',
        }}
      >
        {hasNext && <img src={chevronRight} style={{width: '60px'}}  alt="Next" />}
      </div>
    );
  };
  useEffect(() => {
    fetch('http://localhost:1337/api/galleries?populate=*')
    .then(res => res.json())
    .then(data => console.log(data))
  },[])
  let maisonParags;
  let etapesParags;
  let quotes;
  let imgCollection = []
  let carouselImgs = []
  if(data){
    const particulier = data.projets.particulier
    const professionnel = data.projets.professionnel
    const promotion = data.projets.promotion
    for(let category in data.projets){
      switch(category){
        case 'particulier' && 'professionnel' && 'promotion':
          imgCollection = [...particulier, ...professionnel, ...promotion]
          break;
        default: imgCollection = [...particulier, ...professionnel, ...promotion]
      }
    }
    localStorage.setItem('imgCollection', JSON.stringify(imgCollection))
    carouselImgs = data.projets.gallery 
    const descriptions = data.articles.descriptions
    descriptions.forEach(description => {
      if(description.maisonAuben){
        maisonParags = description.maisonAuben
      }else if(description.etapes){
        etapesParags = description.etapes.split('.').map((text, index) => {
          return <span key={index}>{text}.<br/></span>
        })
      }else if(description.quotes){
        quotes = description.quotes
      }
    })
  }
  let imagesLoadedCount = 0
  carouselImgs.forEach((image) => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = image.portrait
    setTimeout(() => {
      link.onload = () => {
        imagesLoadedCount++;
        if (imagesLoadedCount === carouselImgs.length) {
          // Tutte le immagini sono state precaricate
          setIsLoading(false)
        }
      };
      document.head.appendChild(link)
    }, 4000)
  });
  return (
    <>
    {isLoading ? <Loader /> : <div id="main">
      <section id="home">
        <Nav />
        <div className='carousel-container'>
          <Carousel renderArrowPrev={renderArrowPrev} renderArrowNext={renderArrowNext} autoPlay={true} infiniteLoop={true} showThumbs={false} showStatus={false}>
            {
              carouselImgs.map((img, index) => {
                return <div onClick={() => onNavigate('/projets/' + img.id)}  className='carousel-wrapper' key={index}>
                    <CarouselItem pictures={img.portrait}/>
                    <div className='btn-container'>
                      <button onClick={() => onNavigate('/projets/' + img.id)} className='carousel-btn'>DÉCOUVRIR</button>
                    </div>
                </div>
              })
            }
          </Carousel>
        </div>
      </section>
      <Agence quotes={quotes} maisonParags={maisonParags} etapesParags={etapesParags} />
      <section id='contact'>
        <aside className='nav-wrapper'>
          <ul className='internal-link'>
            <li className='line-2'></li>
            <li className='section-title'>CONTACT</li>
            <li className='line-2'></li>
          </ul>
          <figure id='auben-footer'>
            <img src={mainLogo} alt='footer-logo'/>
        </figure>
        </aside>
        <div className='form-wrapper'>
          <div className='form-foto'>
            <img src={formFoto} alt={formFoto}></img>
          </div>
          <Form />
        </div>
      </section>
    </div>}
    </>
  )
}

export default Root;
