import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Root from './root';
import Header from './components/Header';
import mainLogo from './assets/logo_auben.png'
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import ItemGallery from './components/ItemGallery';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header logo={mainLogo}/>
    <Router>
      <Routes>
        <Route exact path='/Maison_Auben' element={<Root />}/>
        <Route exact path='/Maison_Auben/projets' element={<Gallery />}/>
        <Route exact path='/Maison_Auben/projets/:id' element={<ItemGallery />}/>
      </Routes>
    </Router>
    <Footer logo={mainLogo}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
