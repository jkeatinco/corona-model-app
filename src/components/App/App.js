import React from 'react';
import logo from '../../logo.svg';
// import './App.css';
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
        <hr className="uk-divider-icon" />
        <CopyButton />
        <hr className="uk-divider-icon" />
        <Footer />
        <AlienModal />

        </div>
      </div>
    
  );
}

export default App;
