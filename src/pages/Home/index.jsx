import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.scss'

const Home = () => (
  <div className="App">
    <h3 className="AppTitle">Home</h3>
    <nav className="AppNavigation">
      <Link to="/login">Login</Link> | <Link to="/Register">Register</Link>
    </nav>
  </div>
)

export default Home
