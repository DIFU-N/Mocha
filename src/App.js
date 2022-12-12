import React from 'react';
import Analytics from './components/Analytics';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Herro from './components/Herro';
import NavBar from './components/NavBar';
import NewsLetter from './components/NewsLetter';

function App() {
  return (
    <div> 
      <NavBar /> 
      <Herro />
      <Analytics />
      <NewsLetter />  
      <Cards />
      <Footer />  
    </div>
  );
}

export default App;
