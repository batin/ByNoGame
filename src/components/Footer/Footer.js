import React from "react"
import './Footer.scss'
import logo from '../../images/logo.svg'

const Footer = () => {
  return (
    <footer>
      <div>
      <img src={logo} alt=""/>
      <div className="footerTexts">
        <div className="left">
          <p>About Us</p>
          <p>Team</p>
          <p>Contact</p>
          <p>About Us</p>
          <p>Privacy Policy</p>
        </div>
        <div className="right">
          <p>Categories</p>
          <p>Events</p>
          <p>Features</p>
          <p>Pricing</p>
          <p>Terms Of Use</p>
        </div>
      </div>
      <p>
        © {new Date().getFullYear()}, Built with Gatsby. Creator:
        <a href="https://www.batin.co">Batin</a>
      </p>
      </div>
    </footer>
  )
}

export default Footer