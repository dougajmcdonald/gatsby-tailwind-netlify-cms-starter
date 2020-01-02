import PropTypes from "prop-types"
import React from "react"

const Body = ({ children }) => <main className="w-2/3 mx-auto">{children}</main>

Body.propTypes = {
  children: PropTypes.node.isRequired
}

export default Body
