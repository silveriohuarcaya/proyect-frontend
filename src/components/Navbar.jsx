import React from 'react'
import { Link, Outlet } from 'react-router-dom'
// import Badge from './Badge'

const Navbar = () => (
  <div>
    <nav>
      <div className="container-navbar">
        <ul className="navbar-left">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <a href="/register">Register</a>
          </li>
        </ul>
        <ul className="navbar-right">
          <li>
            <a href="/" id="cart">
              <i className="fa fa-lock" /> Usuario
              {/* <Badge /> */}
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <Outlet />
  </div>
)

export default Navbar
