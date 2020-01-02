import { Link } from "gatsby"
import React from "react"

import NavLink from "../components/nav-link"
import Logo from "../svg/logo.svg"

const Header = () => (
  <header className="bg-secondary font-display flex" style={{ height: `70px` }}>
    <div className="w-2/3 mx-auto flex items-center justify-between">
      <Link to="/">
        <Logo />
      </Link>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/facilities/">Facilities</NavLink>
        <NavLink to="/book/">Book</NavLink>
        <NavLink to="/contact-us/">Contact</NavLink>
      </nav>
    </div>
  </header>
)

export default Header
