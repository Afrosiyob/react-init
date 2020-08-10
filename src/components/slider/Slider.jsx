import React, { useEffect } from "react";
import $ from "jquery";
import "./Slider.scss";

function Slider() {
  useEffect(() => {
    $(window).scroll(function () {
      var rollY = window.scrollY;

      console.log(rollY);

      if (rollY > 450) {
        $(".slider-box").css({
          left: 100 - rollY / 10 + "%",
        });
      }
    });
  }, []);
  return (
    <div className="slider-wrap">
      <div className="titul">this is tiitul</div>
      <div className="slider-box">this is sliders</div>
    </div>
  );
}

export default Slider;
