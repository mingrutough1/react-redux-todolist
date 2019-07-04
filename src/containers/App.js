import React from 'react';
import logo from '../assets/logo.svg';
import '../style/App.css';
import Todolist from './todoList.js';
function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Todolist></Todolist>  
    </div>
  );
}

export default App;
