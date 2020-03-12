import React from "react"
import PropTypes from "prop-types"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import "./Layout.scss"


const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
