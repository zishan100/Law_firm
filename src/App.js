import React from 'react';
import Headers from './components/Headers/Headers';
import Intro from './components/Intro/Intro';
import ChooseUs from './components/ChooseUs/ChooseUs';
import AreaPractice from './components/AreaPractice/AreaPractice';
import './style.css'
import Clients from './components/Clients/Clients';

function App () {
  
    return (
      <div>
        <Headers />
        <div className='wrapper-style' >
          <Intro />
          <ChooseUs />
          <AreaPractice /> 
          <Clients />
        </div>
         
        
        
      </div>
    );
}

export default App;
