import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import Agence from './components/Agence';
import Form from './components/Form';
import formFoto from './assets/FormImage.jpg' 
import Nav from './components/Nav';
import Loader from './components/Loader';
import chevronLeft from './assets/chevron-left.svg'
import chevronRight from './assets/chevron-right.svg'
import CarouselItem from './components/Carousel';
import mainLogo from './assets/logo_auben_white.png'
import { DataContext } from './DataContext';

function Root() {
    const onNavigate = useNavigate()
    const data = useContext(DataContext)
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
  let maisonParags;
  let etapesParags;
  let quotes;
  let imgCollection = []
  let carouselImgs = []
  if(data.articles.length !== 0){
    maisonParags = data.articles.data
    etapesParags = data.steps.data[0].attributes.content.split('.').map((text, index) => {
      return <span key={index}>{text}.<br/></span>
    })
    quotes = data.quotes.data
    carouselImgs = data.gallery.data
    const particulier = data.ptc.data
    const professionnel = data.pfs.data
    const promotion = data.pmt.data
    imgCollection = [...particulier, ...professionnel, ...promotion]
    localStorage.setItem('imgCollection', JSON.stringify(imgCollection))
  }
  //console.log(data, imgCollection)
  let imagesLoadedCount = 0
  carouselImgs.forEach((image) => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = image.attributes.portrait.data.attributes.url
    setTimeout(() => {
      link.onload = () => {
        imagesLoadedCount++;
        if (imagesLoadedCount === carouselImgs.length) {
          // Tutte le immagini sono state precaricate
        }
      };
    }, 3000)
  });
  //console.log(data.isLoading)
  return (
    <>
    {data.isLoading || data.articles.length === 0 ? <Loader /> : <div id="main">
      <section id="home">
        <Nav />
        <div className='carousel-container'>
          <Carousel renderArrowPrev={renderArrowPrev} renderArrowNext={renderArrowNext} autoPlay={true} infiniteLoop={true} showThumbs={false} showStatus={false}>
            {
              carouselImgs.map((img, index) => {
                return <div onClick={() => onNavigate('/projets/' + img.attributes.slug)}  className='carousel-wrapper' key={index}>
                    <CarouselItem pictures={img.attributes.portrait.data.attributes.url}/>
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
