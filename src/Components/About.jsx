import React from "react";
import "./About.css";
import aboutLeftImage from "../Assets/Images/about-left.png";
import tacos from "../Assets/Images/tacos.png";
const About = () => {
  return (
    <div className="about" id="about_us">
      <div className="about_container">
        <div className="about_left_container">
          <img src={aboutLeftImage} alt="aboutImage" />
        </div>
        <div className="about_right_container">
          <h1>About Mariachi</h1>
          <p>
            Experience the passion and flavor of Mexico through our cuisine. Our
            restaurant is dedicated to bringing you the authentic tastes and
            culture of this vibrant country, with every dish crafted with care
            and love. Join us on a journey of culinary exploration and
            discovery, and let us share our story with you through every bite
          </p>
          <button>TELL ME MORE</button>
        </div>
      </div>
      <div className="about_tacos_banner">
        <img src={tacos} alt="tacos" />
        
      </div>
    </div>
  );
};

export default About;
