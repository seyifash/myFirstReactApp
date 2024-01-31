import React from 'react';
import logo from './holberton-logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';


const isIndex = true;

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <div className="form">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email"></input>
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password"></input>
        <br />
        <button>OK</button>
        </div>
      </div>
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(isIndex)}</p>
      </div>
    </div>
  );
}

export default App;
