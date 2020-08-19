import React, { useEffect } from "react";

import "./App.scss";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Routes from "./Routes";
import { useTranslation } from "react-i18next";
import Particles from "react-particles-js";
import $ from "jquery";

import { Button } from "reactstrap";
import Header from "./layouts/header/header";
import Sidebar from "./layouts/sideBar/Sidebar";
import AnimTextSection from "./layouts/animTextSection/AnimTextSection";
import SliderSection from "./layouts/sliderSection/SliderSection";
import AboutUs from "./layouts/aboutUs/AboutUs";

// layouts

function App() {
  // lang
  const { t, i18n } = useTranslation();

  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }

  const option = {
    particles: {
      number: {
        value: 60,
        density: {
          enable: true,
          value_area: 1500,
        },
      },
      line_linked: {
        enable: true,
        opacity: 0.02,
      },
      move: {
        direction: "right",
        speed: 0.05,
      },
      size: {
        value: 1,
      },
      opacity: {
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.05,
        },
      },
    },
    interactivity: {
      events: {
        onclick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        push: {
          particles_nb: 1,
        },
      },
    },
    retina_detect: true,
  };
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
      <div className="particle">
        <Particles
          style={{ witdh: "100%", height: "100vh" }}
          height={"100vh"}
          width={"100vw"}
          params={option}
        />
      </div>
      <Sidebar />
      <Header />
      <AnimTextSection />
      <SliderSection />
      <AboutUs />
      <AnimTextSection />
      {/* this is end */}
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
