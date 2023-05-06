import React from "react";
import "./Footer.css";
import fb from "../Assets/Images/fb.png";
import twitter from "../Assets/Images/twitter.png";
import insta from "../Assets/Images/insta.png";
import Whatsapp from "../Assets/Images/Whatsapp.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <h2>Mariachi</h2>
        <p>
          {" "}
          Indulge in authentic Mexican flavors at our restaurant, where every
          bite is a fiesta for your taste buds!
        </p>
        <div className="socialIcons">
          <img src={fb} alt="FB" />
          <img src={insta} alt="Insta" />
          <img src={twitter} alt="Twitter" />
          <img src={Whatsapp} alt="Whatsapp" />
        </div>
      </div>
      <div className="footer_right">
        <div className="footer_about">
          <ul>
            <li className="footer_list_head">
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">History</a>
            </li>
            <li>
              <a href="#">Our Team</a>
            </li>
            <li>
              <a href="#">Brand Guidelines</a>
            </li>
            <li>
              <a href="#">Terms & Condition</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer_service">
          <ul>
            <li className="footer_list_head">
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">How to Order</a>
            </li>
            <li>
              <a href="#">Our Product</a>
            </li>
            <li>
              <a href="#">Offers</a>
            </li>
            <li>
              <a href="#">Promo</a>
            </li>
            <li>
              <a href="#">Payment Method</a>
            </li>
          </ul>
        </div>
        <div className="footer_other">
          <ul>
            <li className="footer_list_head">
              <a href="#">Other</a>
            </li>
            <li>
              <a href="#">Contact Us </a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
