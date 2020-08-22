import React from "react";

import Img1 from "../../images/3d-design.svg";

import Img2 from "../../images/love.svg";
import "./AnimText.scss";

function AnimText(props) {
  return (
    <div className="anim-text my-4">
      <div className="left-box" style={{ animationDirection: props.animprops }}>
        <img src={Img1} alt="img1" />
        <span class="marquee__message">web design</span>
        <img src={Img2} alt="img2" />

        <span class="marquee__message">social media</span>
        <img src={Img1} alt="img1" />
        <span class="marquee__message">web design</span>
        <img src={Img2} alt="img2" />
      </div>

      <div
        className="right-box"
        style={{ animationDirection: props.animprops }}
      >
        <img src={Img1} alt="img1" />
        <span class="marquee__message">web design</span>
        <img src={Img2} alt="img2" />

        <span class="marquee__message">social media</span>
        <img src={Img1} alt="img1" />
        <span class="marquee__message">web design</span>
        <img src={Img2} alt="img2" />
      </div>
    </div>
  );
}

export default AnimText;
