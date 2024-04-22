import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DataProvider } from './DataContext';
import Root from './root';
import Header from './components/Header';
import mainLogo from './assets/logo_auben_white.png'
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import ItemGallery from './components/ItemGallery';
import MentionsLegales from './components/mentionsLegales';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataProvider>
      <Router>
      <Header logo={mainLogo}/>
        <Routes basename={`/${process.env.PUBLIC_URL}`}>
          <Route exact path='/' element={<Root />}/>
          <Route path='/projets' element={<Gallery />}/>
          <Route path='/projets/:id' element={<ItemGallery />}/>
          <Route path='/mentions_legales' element={<MentionsLegales />}/>
        </Routes>
      <Footer />
      </Router>
    </DataProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
