import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // BUILT IN API CALL: ========================================
  // Running App on Local Host my machine, does in fact request data successfully. 
  // The question now is, if it is deployed on digital ocean app...will it be able to access. ? 
  useEffect(()=>{
    fetch(
      'http://134.122.29.54:3000/messages',
      {
        method: "GET",
        
      }
    ).then( res => res.json())
    .then(response => {
      console.log("response data:",response)
      
    })
    .catch(error => console.log(error))
  })
  //=============================================================
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>dev branch</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
