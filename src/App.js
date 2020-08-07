import React from 'react';

import './App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Routes from './Routes';




function App() {
  return (
    <div className="App">



      <Router>
        <Link to='/' > page one </Link>
        <Link to='/pagetwo' > page two </Link>

        <Routes />
      </Router>


    </div>
  );
}

export default App;
