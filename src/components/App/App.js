import React from 'react';
import Header from '../Header/Header';
import Model from '../Model/Model';
import Footer from '../Footer/Footer';
import CopyButton from '../CopyButton/CopyButton';
import AlienModal from '../AlienModal/AlienModal';

function App() {
  return (
    <div className="uk-section">
      <div className="uk-container">

        <Header />
        
        <Model />
        <CopyButton />
        <hr className="uk-divider-icon" />
        <Footer />
        <AlienModal />

        </div>
      </div>
    
  );
}

export default App;
