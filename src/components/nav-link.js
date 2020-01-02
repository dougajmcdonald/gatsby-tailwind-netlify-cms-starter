import { Link } from "gatsby"
import React from "react"

const NavLink = ({ to, children }) => (
  <Link
    className="text-white font-display mr-10 ml-10 leading-loose border-b-2 border-transparent hover:border-white hover:no-underline"
    activeStyle={{ borderBottom: `2px solid #EE6C4D` }}
    to={to}
  >
    {children}
  </Link>
)

export default NavLink
