import React, { useEffect } from "react";
import $ from "jquery";
import "./Slider.scss";

// import OwlCarousel from "react-owl-carousel2";
import slideImg from "../../images/1@2x.png";
import Draggable from "react-draggable";

function SliderLeft(props) {
  // const options = {
  //   items: 3,
  //   nav: false,
  //   rewind: true,
  //   dots: false,
  //   startPosition: props.startSlider,

  //   margin: 40,
  //   center: true,
  //   smartSpeed: 500,
  //   fallbackEasing: "linear",
  //   // autoWidth: true,
  //   responsive: {
  //     0: {
  //       items: 1,
  //     },
  //     600: {
  //       items: 2,
  //     },
  //     960: {
  //       items: 3,
  //     },
  //     1200: {
  //       items: 4,
  //     },
  //   },
  // };

  // useEffect(() => {
  //   // var owl = $(".owl-carousel");

  //   // owl.on("mousewheel", ".owl-stage", function (e) {
  //   //
  //   //   e.preventDefault();
  //   // });

  //   $(window).scroll(function () {
  //     var rollY = window.scrollY;

  //     console.log(rollY);

  //     if (rollY > 600 && rollY % 100 === 0) {
  //       // alert("oshdi");
  //     }
  //   });
  // }, []);

  useEffect(() => {
    $(window).scroll(function () {
      var rollY = window.scrollY;

      console.log(rollY);

      if (rollY > 450) {
        $(".slider-box2").css({
          left: -180 + rollY / 10 + "%",
          //   left: 120 - rollY / 10 + "%",
        });
      }
    });
  }, []);

  return (
    <div className="slider-wrap">
      <div className="titul">
        {" "}
        <code>01</code> global havaskor{" "}
      </div>

      <Draggable
        axis="x"
        handle=".handle"
        defaultPosition={{ x: 0, y: 0 }}
        position={null}
        grid={[25, 25]}
        scale={1}
      >
        <div>
          {/* <div className="handle">Drag from here</div> */}
          <div className="slider-box2 handle">
            <div className="slide-item">
              <img src={slideImg} alt="slide img" />
              <img src={slideImg} alt="slide img" />
              <img src={slideImg} alt="slide img" />
              <img src={slideImg} alt="slide img" />
            </div>
          </div>
        </div>
      </Draggable>

      {/* <div className="owl-cal">
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
      </div> */}
    </div>
  );
}

export default SliderLeft;
