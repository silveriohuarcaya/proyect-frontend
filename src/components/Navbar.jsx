import React from 'react'
// import Badge from './Badge'

const Navbar = () => (
  <nav>
    <div className="container">
      <ul className="navbar-left">
        <li>
          <a href="/Home">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>

      <ul className="navbar-right">
        <li>
          <a href="/" id="cart">
            <i className="fa fa-shopping-cart" /> Cart
            {/* <Badge /> */}
          </a>
        </li>
      </ul>
    </div>
  </nav>
)

export default Navbar
