import React, { useEffect } from "react";

import "./App.scss";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Routes from "./Routes";
import { useTranslation } from "react-i18next";

import $ from "jquery";

import { Button } from "reactstrap";
import Header from "./layouts/header/header";
import Sidebar from "./layouts/sideBar/Sidebar";

// layouts

function App() {
  // lang
  const { t, i18n } = useTranslation();

  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }

  // scrolling

  useEffect(() => {
    $(window).scroll(function () {
      var rollY = window.scrollY;

      $("body").css({
        "background-position": "0 -" + rollY / 7 + "px",
      });
    });
  }, []);

  return (
    <div className="App">
      <Sidebar />
      <Header />
      <header className="App-header">
        <Button>ok</Button>
        <button onClick={() => handleClick("en")}> en </button>
        <button onClick={() => handleClick("ru")}> ru </button>
        <button onClick={() => handleClick("uz")}> uz </button>
        <Router>
          <Link to="/"> page one </Link>

          <Link to="/pagetwo"> page one </Link>

          <Routes />
        </Router>

        <p> {t("hello")} </p>
        <h1>hello </h1>
        <h1>hello </h1>
        <h1>hello </h1>
        <h1>hello </h1>
        <h1>hello </h1>
        <h1>hello </h1>
        <h1>hello </h1>
        <h1>hello </h1>
        <h1>hello </h1>
        <h1>hello </h1>
        <h1>hello </h1>
        <h1>hello </h1>
        <h1>hello </h1>
        <h1>hello </h1>
        <h1>hello </h1>
        <h1>hello </h1>
        <h1>hello </h1>
        <h1>hello </h1>
        <h1>hello </h1>
        <h1>hello </h1>
        <h1>hello </h1>
        <h1>hello </h1>
        <h1>hello </h1>
        <h1>hello </h1>
        <h1>hello </h1>
        <h1>hello </h1>
        <h1>hello </h1>
        <h1>hello </h1>
        <h1>hello </h1>
        <h1>hello </h1>
      </header>{" "}
    </div>
  );
}

export default App;
