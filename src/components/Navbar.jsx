import React from 'react'
import { Link, Outlet } from 'react-router-dom'
// import Badge from './Badge'

const Navbar = () => {
  const profile = JSON.parse(localStorage.getItem('profile'))
  console.log(profile)
  return (
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
              <Link to="/">
                <i className="fa fa-lock" />
                {profile
                  ? ` ${profile.firstName} ${profile.lastName}`
                  : 'Usuario'}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  )
}

export default Navbar
