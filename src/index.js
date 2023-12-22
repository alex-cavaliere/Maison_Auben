import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Root from './root';
import Header from './components/Header';
import mainLogo from './assets/logo_auben.png'
//import whiteLogo from './assets/logo_auben_white.png'
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import ItemGallery from './components/ItemGallery';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Header logo='https://static.wixstatic.com/media/3f174c_5a3182d5754949fa995006c87e2554ce~mv2.png/v1/fill/w_256,h_181,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/face%20carte%20AUB%C3%88N%202.png'/>
      <Routes>
        <Route exact path='/Maison_Auben' element={<Root />}/>
        <Route path='/Maison_Auben/projets' element={<Gallery />}/>
        <Route path='/Maison_Auben/projets/:id' element={<ItemGallery />}/>
      </Routes>
    <Footer logo={mainLogo}/>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
