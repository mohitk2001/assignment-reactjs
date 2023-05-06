import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header_list_container">
        <ul className="header_lists">
          <li className="mx-sm-2 mr-md-3 mr-lg-4 ">
            <a href="#home">Home</a>
          </li>
          <li className="mx-sm-2 mx-md-3 mx-lg-4 ">
            <a href="#about_us">About</a>
          </li>
          <li className="mx-sm-2 mx-md-3 mx-lg-4 ">
            <a href="#our_menu">Menu</a>
          </li>
          <li className="mx-sm-2 mx-md-3 mx-lg-4 ">
            <a href="#offers">Offers</a>
          </li>
          <li className="mx-sm-2 ml-md-3 ml-lg-4 ">
            <a href="#contact_us">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
