import React from 'react';

import './App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Routes from './Routes';
import i18n from './i18n';



function App({t}) {
  return (
    <div className="App">

<h1>{t('Welcome to React')}</h1>

      <Router>
        <Link to='/' > page one </Link>
        <Link to='/pagetwo' > page two </Link>

        <Routes/>
      </Router>

     
    </div>
  );
}

export default App;
