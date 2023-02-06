import React from "react";
import { NavContainer, NavItems, NavWrapper } from "./LayoutStyles";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <NavWrapper>
      <NavContainer>
        <img src={logo} alt="logo" />

        <div className="nav__right">
          <NavItems>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/membership">Membership</Link>
          </NavItems>

          <div className="btn__btn">
            <Link to="">
              <button>Sign in</button>
            </Link>
            <Link to="">
              <button>Sign up</button>
            </Link>
          </div>
        </div>
      </NavContainer>
    </NavWrapper>
  );
};

export default Nav;
