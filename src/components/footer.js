import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <footer className="bg-secondary font-body flex" style={{ height: `200px` }}>
    <div className="w-4/5 mx-auto text-white flex flex-column flex-wrap pt-16">
      <span className="w-full text-center">{siteTitle}</span>
      <span className="w-full text-center text-primary">
        © {new Date().getFullYear()}, built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </span>
    </div>
  </footer>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
