import React from 'react'
import { Link } from 'gatsby'

const Nav = ({ items }) => (
  <nav className="nav">
    {items.map((item, key) => (
      <Link key={key} className="nav-item" to={item.path}>
        {item.label}
      </Link>
    ))}
  </nav>
)

export default Nav
