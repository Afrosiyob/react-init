import React, { useEffect } from "react";
import $ from "jquery";
import "./Slider.scss";

import OwlCarousel from "react-owl-carousel2";
import slideImg from "../../images/1@2x.png";

function Slider() {
  const options = {
    items: 3,
    nav: false,
    rewind: true,
    dots: false,

    margin: 40,
    center: true,
    smartSpeed: 500,
    fallbackEasing: "linear",
    // autoWidth: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      960: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  };

  useEffect(() => {
    // var owl = $(".owl-carousel");

    // owl.on("mousewheel", ".owl-stage", function (e) {
    //   alert("fvewfwe");
    //   e.preventDefault();
    // });

    $(window).scroll(function () {
      var rollY = window.scrollY;

      console.log(rollY);

      if (rollY > 600 && rollY % 100 === 0) {
        // alert("oshdi");
        // $(".owl-next").trigger("click");
      }
    });
  }, []);
  return (
    <div className="slider-wrap">
      <div className="titul">
        {" "}
        <code>01</code> global havaskor{" "}
      </div>
      {/* <div className="slider-box">
        <div className="slide-item">
          <img src={slideImg} alt="slide img" />
          <img src={slideImg} alt="slide img" />
          <img src={slideImg} alt="slide img" />
        </div>
      </div> */}

      <div className="owl-cal">
        <OwlCarousel options={options}>
          <div>
            {" "}
            <img src={slideImg} alt="slide img" />
          </div>
          <div>
            {" "}
            <img src={slideImg} alt="slide img" />
          </div>
          <div>
            {" "}
            <img src={slideImg} alt="slide img" />
          </div>
          <div>
            {" "}
            <img src={slideImg} alt="slide img" />
          </div>
          <div>
            {" "}
            <img src={slideImg} alt="slide img" />
          </div>
          <div>
            {" "}
            <img src={slideImg} alt="slide img" />
          </div>
          <div>
            {" "}
            <img src={slideImg} alt="slide img" />
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
}

export default Slider;
