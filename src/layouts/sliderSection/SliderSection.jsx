import React from "react";
import Slider from "../../components/slider/Slider";

function SliderSection() {
  return (
    <div className="my-4">
      <Slider startSlider="0" />
      <Slider startSlider="6" />
      <Slider startSlider="0" />
      <Slider startSlider="6" />
      <Slider startSlider="0" />
      <Slider startSlider="6" />
    </div>
  );
}

export default SliderSection;
