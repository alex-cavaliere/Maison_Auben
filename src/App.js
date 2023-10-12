import './App.css';

function App() {
  return (
    <div className="main">
      <header className="App-header">
        <div className='logo-container'>
          <figure>
            <img src='https://static.wixstatic.com/media/3f174c_08d85cf0eff844f7847191093627d821~mv2.png/v1/fill/w_230,h_163,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/LOGO%20SITE%20CLAIR.png' className="App-logo" alt="logo" />
            <figcaption>ARCHITECTES D'INTÉRIEUR & DÉCORATEURS</figcaption>
          </figure>
        </div>
      </header>
      <div id="home">
        <aside className='nav-wrapper'>
          <nav>
            <ul className='internal-link'>
              <li className='line'></li>
              <li>PROJETS</li>
              <li>L'AGENCE</li>
              <li>CONTACT</li>
              <li className='item'><span><i class="fa-brands fa-pinterest"></i></span></li>
              <li className='item'><span><i class="fa-brands fa-instagram"></i></span></li>
              <li className='item'><span><i class="fa-brands fa-facebook-f"></i></span></li>
            </ul>
          </nav>
        </aside>
        <section>
        <div className='carousel-container'>

        </div>
        </section>
      </div>
    </div>
  );
}

export default App;
