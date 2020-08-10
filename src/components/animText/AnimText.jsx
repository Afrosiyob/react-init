import React from "react";

import "./AnimText.scss";

function AnimText(props) {
  return (
    <div className="anim-text my-4">
      <div className="left-box" style={{ animationDirection: props.animprops }}>
        <i class="fas fa-globe"></i>
        <span class="marquee__message">web design</span>
        <i class="fas fa-globe"></i>

        <span class="marquee__message">social media</span>
        <i class="fas fa-globe"></i>
        <span class="marquee__message">Graphic design</span>
        <i class="fas fa-globe"></i>
      </div>

      <div
        className="right-box"
        style={{ animationDirection: props.animprops }}
      >
        <i class="fas fa-globe"></i>
        <span class="marquee__message">Web development</span>
        <i class="fas fa-globe"></i>

        <span class="marquee__message">social media</span>
        <i class="fas fa-globe"></i>
        <span class="marquee__message">web design</span>
        <i class="fas fa-globe"></i>
      </div>
    </div>
  );
}

export default AnimText;
