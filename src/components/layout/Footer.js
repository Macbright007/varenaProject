import React from "react";
import logo from "../../images/logo.svg";
import { FooterContainer, FooterWrapper } from "./LayoutStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <div className="th__grid">
          <img src={logo} alt="logo" />
          <p>Copyright &#169; 2022</p>
        </div>
        <div className="th__grid">
          <h2>Browse</h2>
          <ul>
            <li>Home</li>
            <li>Gallery</li>
            <li>Membership</li>
            <li>Trending</li>
            <li>Songs</li>
          </ul>
        </div>
        <div className="th__grid">
          <h2>About</h2>
          <ul>
            <li>Contact</li>
            <li>About</li>
            <li>blog</li>
          </ul>
        </div>
        <div className="th__grid">
          <h2>Resources</h2>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
