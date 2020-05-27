import React from 'react';
import image from './images/hang.jpg'
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <h1>Hänga gubbe</h1>
        
        <p>
          Syftet med spelet är att gissa en slumpmässig ord<br/>
          som valts av datorn
        </p>
        
        <img src={image} className="App-logo" alt="logo" />

        <h1>- - - - - -</h1>

        <p>Antal fel: 0</p>

        <button>a</button>


        
      </header>
      
    </div>
  );
}
export default App;


