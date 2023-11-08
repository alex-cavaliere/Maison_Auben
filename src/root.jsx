import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import mainLogo from './assets/logo_auben.png'
import {useEffect, useState } from 'react';
import BasicCard from './components/Card';
import Form from './components/Form';
import formFoto from './assets/FormImage.jpg' 
import Nav from './components/Nav';
import cube1 from './assets/cube 1.png'
import cube2 from './assets/cube 2.png'
import cube3 from './assets/cube 3.png'
import chevronLeft from './assets/chevron-left.svg'
import chevronRight from './assets/chevron-right.svg'
import quoteLeft from './assets/quote.svg'
import quoteRight from './assets/quote-mirror.svg'
import CarouselItem from './components/Carousel';

function Root() {
  const [data, setData] = useState();
  const renderArrowPrev = (clickHandler, hasPrev) => {
    return (
      <div
        onClick={clickHandler}
        style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          transform: 'translateY(-50%)',
          cursor: 'pointer',
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
          cursor: 'pointer',
        }}
      >
        {hasNext && <img src={chevronRight} style={{width: '60px'}}  alt="Next" />}
      </div>
    );
  };
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data.json`)
    .then(async res => await res.json())
    .then(data => setData(data))
    .catch(err => console.log(err))
  },[])
  let maisonParags;
  let etapesParags;
  let imgCollection = []
  if(data){
    const particulier = data.projets.particulier
    const professionnel = data.projets.professionnel
    const promotion = data.projets.promotion
    for(let category in data.projets){
      switch(category){
        case 'particulier':
          imgCollection = [...particulier]
          break;
        case 'professionnel':
          imgCollection = [...particulier ,...professionnel]
          break;
        case 'promotion':
          imgCollection = [...particulier, ...professionnel, ...promotion]
          break;
        default: imgCollection = [...particulier, ...professionnel, ...promotion]
      }
    }
    localStorage.setItem('projets', JSON.stringify(data.projets))
    const descriptions = data.articles.descriptions
    descriptions.forEach(description => {
      if(description.maisonAuben){
        maisonParags = description.maisonAuben.split('.').map((text, index) => {
          return <span key={index}>{text}.<br/></span>
        })
      }else if(description.etapes){
        etapesParags = description.etapes.split('.').map((text, index) => {
          return <span key={index}>{text}.<br/></span>
        })
      }
    })
  }
  return (
    data && (<div id="main">
    <section id="home">
      <Nav />
      <div className='carousel-container'>
        <Carousel renderArrowPrev={renderArrowPrev} renderArrowNext={renderArrowNext} autoPlay={true} infiniteLoop={true} showThumbs={false}>
          {
            imgCollection.map((img, index) => {
              return <div className='carousel-wrapper' key={index}>
                  <CarouselItem pictures={img.portrait}/>
              </div>
            })
          }
        </Carousel>
        <div className='btn-container'>
          <button className='carousel-btn'>DÉCOUVRIR</button>
        </div>
      </div>
    </section>
    <section id="agence">
      <div className='agence-article'>
        <aside className='nav-wrapper'>
            <div className='internal-link'>
              <div className='line-2'></div>
              <h1 className='section-title'>L'AGENCE</h1>
              <div className='line-2'></div>
            </div>
        </aside>
        <article className='description-container'>
          <div className='description'>
            <div className='text'>
              <h2 className='article-head'>MAISON AUBÈN</h2>
              <p className='article-text'>{maisonParags}</p>
            </div>
            <img src='https://static.wixstatic.com/media/3f174c_c1a61b1d06c2414eaaa1c874b28cb7a0~mv2.jpg/v1/fill/w_390,h_489,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/33dfe90304eb8b9d04849e26505b4016.jpg' alt='Auben'/>
          </div>
          <div className='steps'>
            <h3>LES DIFFÉRENTES ÉTAPES</h3>
            <p className='steps-description'>{etapesParags}</p>
            <div className='card-wrapper'>
              <div className='card-container'>
                <BasicCard cube={cube1} cardTitle='Step N° 1'/>
              </div>
              <div className='arrow'><span><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg></span></div>
              <div className='card-container'>
                <BasicCard cube={cube2} cardTitle='Step N° 2'/>
              </div>
              <div className='arrow'><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg></div>
              <div className='card-container'>
                <BasicCard cube={cube3} cardTitle='Step N° 3'/>
              </div>
            </div>
            <div className='quotes-container'>
              <span className='quote-icon'><img src={quoteLeft} alt='quote-img'/></span>
              <div className='quotes'>
                <h4>MME LEMOINE - RILLIEUX LA PAPE (AGENCE ORPI)</h4>
                <p className='quote'>Nous vous remercions pour la qualité de vos conseils, vos propositions d’agencement et de décoration. Nos collaborateurs et nous-mêmes nous sentons vraiment bien dans notre agence.</p>
              </div>
              <span className='quote-icon'><img src={quoteRight} alt='quote-img'/></span>
            </div>
          </div>
        </article>
      </div>
    </section>
    <section id='contact'>
      <aside className='nav-wrapper'>
        <div className='internal-link'>
          <div className='line-2'></div>
          <h1 className='section-title'>CONTACT</h1>
          <div className='line-2'></div>
        </div>
      </aside>
      <div className='form-wrapper'>
        <div className='form-foto'>
          <img src={formFoto} alt={formFoto}></img>
        </div>
        <Form />
      </div>
    </section>
  </div>)
  );
}

export default Root;
