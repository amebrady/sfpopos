import React from 'react'
import './App.css';
import Title from './Title.js'
import POPOSList from './POPOSList.js';
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Title />
      <Outlet />
    </div>
  );
}

export default App;
