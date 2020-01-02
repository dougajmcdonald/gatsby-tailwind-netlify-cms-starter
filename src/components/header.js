import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="bg-secondary font-display flex" style={{ height: `70px` }}>
    <div className="w-2/3 mx-auto">
      <h1 className="text-white">
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
