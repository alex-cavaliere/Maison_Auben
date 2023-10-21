import './App.css';
import Header from './components/Header';
import {useEffect, useState } from 'react';
import BasicCard from './components/Card';

function App() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data.json`)
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err))
  },[])
  let maisonParags;
  let etapesParags;
  if(data){
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
    <div id="main">
      <Header />
      <section id="home">
        <aside className='nav-wrapper'>
          <nav>
            <ul className='internal-link'>
              <li className='line-1'></li>
              <li className='nav-hidden'>PROJET</li>
              <li className='line-1 hidden'></li>
              <li>PROJETS</li>
              <li>L'AGENCE</li>
              <li>CONTACT</li>
              <li className='item'><span><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 496 512"><path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"/></svg></span></li>
              <li className='item'><span><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></span></li>
              <li className='item'><span><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg></span></li>
            </ul>
          </nav>
        </aside>
        <div className='carousel-container'>
          <div className='carousel'></div>
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
                  <BasicCard />
                </div>
                <div className='arrow'><span><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg></span></div>
                <div className='card-container'>
                  <BasicCard />
                </div>
                <div className='arrow'><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg></div>
                <div className='card-container'>
                  <BasicCard />
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

export default App;
