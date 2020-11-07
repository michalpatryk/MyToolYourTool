import React from 'react';
import axios from 'axios';
import logo from './../../images/logo.svg';
import './App.css';

function divExample()	{
  return(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="nie  działa"/>
      </header>
    </div>
  )
}
function toolBar(){
  // return(
    
  // )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
	  {divExample()}
    </div>
	
  );
}

export default App;
