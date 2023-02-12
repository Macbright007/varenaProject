import React from "react";
import { NavContainer, NavItems, NavWrapper } from "./LayoutStyles";
import logo from "../../images/logo.svg";
import { NavLink } from "react-router-dom";

const Nav = () => {

  // style function for active link
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      color: isActive ? '#e67f1a' : 'white',
      textTransform: isActive ? 'uppercase' : 'none',
    }
  }

  return (
    <NavWrapper>
      <NavContainer>
        <img src={logo} alt="logo" />

        <div className="nav__right">
          <NavItems>
            <NavLink to="/home" style={navLinkStyles}>Home</NavLink>
            <NavLink to="/about" style={navLinkStyles}>About</NavLink>
            <NavLink to="/gallery" style={navLinkStyles}>Gallery</NavLink>
            <NavLink to="/blog" style={navLinkStyles}>Blog</NavLink>
            <NavLink to="/contact" style={navLinkStyles}>Contact</NavLink>
            <NavLink to="/membership" style={navLinkStyles}>Membership</NavLink>
          </NavItems>

          <div className="btn__btn">
            <NavLink to="">
              <button>Sign in</button>
            </NavLink>
            <NavLink to="">
              <button>Sign up</button>
            </NavLink>
          </div>
        </div>
      </NavContainer>
    </NavWrapper>
  );
};

export default Nav;
