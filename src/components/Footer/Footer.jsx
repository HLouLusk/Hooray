import React from "react";
import "./Footer.scss";
import Location from "../../assets/images/location.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__left">
        <img src={Location} alt="Location Icon" />
        North Vancouver, BC
      </div>
      <div className="footer__right">Made with love by Hooray!</div>
    </footer>
  );
};

export default Footer;
