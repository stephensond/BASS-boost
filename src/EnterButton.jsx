import React from "react";
import GradientButton from "react-linear-gradient-button";

export default function EnterButton({ setLandingPage }) {
  return (
    <GradientButton
      onClick={() => setLandingPage(false)}
      theme="The Blue Lagoon"
      background="linear-gradient(to right, #43c6ac, #191654)"
      color="#fff"
    >
      Give me the BASS
    </GradientButton>
  );
}
