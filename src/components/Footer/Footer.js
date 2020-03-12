import React from "react"
import './Footer.scss'
import logo from '../../images/logo.svg'

const Footer = () => {
  return (
    <footer>
      <div>
      <img src={logo} alt=""/>
      <p>
        © {new Date().getFullYear()}, Built with Gatsby. Creator:
        <a href="https://www.batin.co">Batin</a>
      </p>
      </div>
    </footer>
  )
}

export default Footer