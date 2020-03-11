import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './Header.scss'

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <h1>
        <Link className="heading" to="/">
          {siteTitle}
        </Link>
      </h1>
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