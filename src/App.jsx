import React from 'react'
<<<<<<< HEAD

import Navbar from './components/Navbar'
// import ProductList from './components/ProductList'
// import ShoppingCart from './components/ShoppingCart'

import './App.scss'

const App = () => (
  <>
    <Navbar />
    <div className="container">
      <div className="shopping-container">{/* <ShoppingCart /> */}</div>
      <div>
        <h1>Product List</h1>
        {/* <ProductList /> */}
      </div>
    </div>
  </>
=======
import logo from './logo.svg'
import './App.css'

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
>>>>>>> 4c6e588 (modify *.jsx)
)

export default App
