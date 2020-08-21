import React from "react";
import SliderRight from "../../components/slider/SliderRight";
import SliderLeft from "../../components/slider/SliderLeft";

function SliderSection() {
  return (
    <div className="my-4" id="work">
      <SliderLeft />
      <SliderRight />
    </div>
  );
}

export default SliderSection;
