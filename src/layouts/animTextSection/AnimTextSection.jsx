import React from "react";
import AnimText from "../../components/animText/AnimText";

function AnimTextSection() {
  return (
    <div className="my-4">
      <AnimText animprops="normal" />
      <AnimText animprops="reverse" />
      <AnimText animprops="normal" />
    </div>
  );
}

export default AnimTextSection;
