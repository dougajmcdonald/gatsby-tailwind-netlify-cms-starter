import { Link } from "gatsby"
import React from "react"

import Logo from "../svg/logo.svg"

const Header = () => (
  <header className="bg-secondary font-display flex" style={{ height: `70px` }}>
    <div className="w-2/3 mx-auto flex items-center">
      <Logo />
    </div>
  </header>
)

export default Header
