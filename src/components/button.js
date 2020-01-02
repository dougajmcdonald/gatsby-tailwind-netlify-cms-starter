import React from "react"
import { Link } from "gatsby"

const Button = ({ to, children }) => (
  <Link to={to}>
    <button
      className="bg-tertiary rounded text-white font-bold font-body text-center my-10"
      style={{ width: `200px`, height: `60px` }}
    >
      {children}
    </button>
  </Link>
)

export default Button
