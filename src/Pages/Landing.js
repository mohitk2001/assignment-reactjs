import React from "react";
import Header from "../Components/Header";
import "./Landing.css";
import Logo from "../Assets/Images/Logo.png";
import Menu from "../Components/Menu";
import About from "../Components/About";
import { OurOffer } from "../Components/OurOffer";
import Footer from "../Components/Footer";
import LatestOffer from "../Components/LatestOffer";
import { OverLayFeature } from "../Components/OverLayFeature";
const Landing = () => {
  return (
    <>
      <Header />
      <div className="top_mariachi" id="home">
        <div className="top_mariachi_conatiner">
          <img src={Logo} alt="Mariachi" />
          <h1>Mariachi</h1>
          <p>
            Indulge in authentic Mexican flavors at our restaurant, where every
            bite is a fiesta for your taste buds!
          </p>
          <button className="mt-md-3">ORDER NOW</button>
        </div>
      </div>
      <Menu/>
      <About/>
      <OurOffer/>
      <OverLayFeature/>
      <LatestOffer/>
      <Footer/>
    </>
  );
};

export default Landing;
