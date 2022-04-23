import React from "react";
import "./footer.styles.scss";
import categoriesData from "../Category/categoriesData";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-section footer__shop">
          <h5>Shop</h5>
          <ul>
            {categoriesData.map(({ title }) => {
              return <li>{title}</li>;
            })}
          </ul>
        </div>
        <div className="footer-section footer__login">
          <h5>Contact</h5>
          <ul>
            <li>Get in touch</li>
            <li>Report a problem</li>
          </ul>
        </div>
        <div className="footer-section footer__account">
          <h5>Account</h5>
          <ul>
            <li>Login to your account</li>
            <li>Create a new account</li>
          </ul>
        </div>
        <div className="footer-section footer__socials">
          <h5>Socials</h5>
          <ul>
            <li>Instagram Icon</li>
            <li>Facebook Icon</li>
            <li>Twitter Icon</li>
            <li>Tiktok Icon</li>
          </ul>
        </div>
        <div className="footer-section footer__creator">
          <h5>Designed & Developed by sayad.design</h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
