import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Routes from "./Routes";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => handleClick("en")}> en </button>
        <button onClick={() => handleClick("ru")}> ru </button>
        <button onClick={() => handleClick("uz")}> uz </button>
        <Router>
          <Link to="/"> page one </Link>

          <Link to="/pagetwo"> page one </Link>

          <Routes />
        </Router>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code> src / App.js </code> and save to reload.{" "}
        </p>{" "}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React{" "}
        </a>{" "}
      </header>{" "}
    </div>
  );
}

export default App;
