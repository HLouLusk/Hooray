import React from "react";
import "./Footer.scss";
import Location from "../../assets/location.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={Location} alt="Location Icon" />
        North Vancouver, BC
      </div>
      <div className="footer-right">Made with love by Hooray!</div>
    </footer>
  );
};

export default Footer;
