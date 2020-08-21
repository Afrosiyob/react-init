import React, { useEffect } from "react";

import "./App.scss";

import Particles from "react-particles-js";
import $ from "jquery";

import Header from "./layouts/header/Header";
import Sidebar from "./layouts/sideBar/Sidebar";
import AnimTextSection from "./layouts/animTextSection/AnimTextSection";
import SliderSection from "./layouts/sliderSection/SliderSection";
import AboutUs from "./layouts/aboutUs/AboutUs";
import Footer from "./layouts/footer/Footer";

// layouts

function App() {
  // lang

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
      <Footer />
      {/* this is end */}
    </div>
  );
}

export default App;
