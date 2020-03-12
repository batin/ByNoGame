import React from "react";
import { Link } from "gatsby";
import "./Navbar.scss";
import logo from "../../images/logo.svg"

const Navbar = ({}) => {
  return (
    <>
      <nav role="navigation">
        <div id="menuToggle">
          <input  type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <li>
              <Link to="/" activeClassName="navbarActive"> Home Page</Link>
            </li>
            <li>
              <Link to="/addCard" activeClassName="navbarActive" >Add Card</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
