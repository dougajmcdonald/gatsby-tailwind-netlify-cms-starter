import { Link } from "gatsby"
import React, { useState } from "react"

import NavLink from "../components/nav-link"
import Logo from "../svg/logo.svg"

const Header = () => {
  const [isExpanded, toggleExpansion] = useState(false)
  const pages = [
    {
      route: `/`,
      text: `Home`
    },
    {
      route: `/about`,
      text: `About`
    },
    {
      route: `/book`,
      text: `Book`
    },
    {
      route: `/contact-us`,
      text: `Contact Us`
    }
  ]
  return (
    <header
      className="bg-secondary font-display flex"
      style={{ minHeight: `70px` }}
    >
      <div className="w-4/5 md:w-2/3 mx-auto py-4 flex flex-wrap items-center justify-between">
        <Link to="/">
          <Logo />
        </Link>
        <nav className="hidden md:block">
          {pages.map(page => (
            <NavLink key={page.text} to={page.route}>
              {page.text}
            </NavLink>
          ))}
        </nav>
        <button
          className="md:hidden text-white border-white border-2 rounded p-2"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          Menu
        </button>
        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:hidden md:flex md:items-center mt-4 w-full md:w-auto border-t-2 border-white`}
        >
          {pages.map(page => (
            <Link
              className="block md:inline-block mt-4 md:mt-0 md:ml-6 no-underline text-white font-display hover:no-underline"
              activeStyle={{ color: `#EE6C4D` }}
              key={page.text}
              to={page.route}
            >
              {page.text}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
