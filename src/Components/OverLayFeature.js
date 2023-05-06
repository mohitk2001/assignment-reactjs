import React from "react";
import "./OverLayFeature.css";
import logo from "../Assets/Images/Logo.png";
export const OverLayFeature = () => {
  return (
    <div className="OverLayFeature">
      <div className="OverLay_content">
        <img src={logo} alt="logo" />
        <p>
          Discover a world of flavors at our restaurant, where every dish tells
          a story. oin our family of satisfied customers and indulge in an
          unforgettable dining experience.
        </p>
        <span>Pedro Rodriguez</span>
      </div>
    </div>
  );
};
