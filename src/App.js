import React from 'react';
import Analytics from './components/Analytics';
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
    </div>
  );
}

export default App;
