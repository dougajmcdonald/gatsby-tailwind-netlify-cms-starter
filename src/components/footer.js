import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <footer
    className="bg-secondary font-body flex mt-24"
    style={{ minHeight: `220px` }}
  >
    <div className="w-4/5 md:w-2/3 mx-auto text-white flex flex-column flex-wrap py-16">
      <span className="w-full text-center">{siteTitle}</span>
      <span className="w-full text-center">
        by <a href="https://twitter.com/dougajmcdonald">@dougajmcdonald</a>
      </span>
      <span className="w-full text-center text-primary mt-8">
        © {new Date().getFullYear()}, built with
        {` `}
        <a className="text-primary" href="https://www.gatsbyjs.org">
          Gatsby
        </a>
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
