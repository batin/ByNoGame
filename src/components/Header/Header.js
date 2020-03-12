import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './Header.scss'
import logo from '../../images/logo.svg'
import Navbar from '../Navbar/Navbar'
const Header = ({ siteTitle }) => (
  <header>
    <div>
      <Navbar/> {/* mobile navbar*/}
      <div className="navbarDesktop">
        <ul>
          <li>
            <Link to="/" activeClassName="navbarActive"> Home Page</Link>
          </li>
          <li>
            <Link to="/addCard" activeClassName="navbarActive" >Add Card</Link>
          </li>
        </ul>
      </div>
      <Link className="heading" to="/">
        <img src={logo} alt=""/>
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
