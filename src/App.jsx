import React, { useState, useEffect } from 'react'
import { getCharacters } from './services/Characters'
import './App.scss'

import Navbar from './components/Navbar'
// import ProductList from './components/ProductList'
// import ShoppingCart from './components/ShoppingCart'

const App = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getCharacters()
        setCharacters(data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="shopping-container">{/* <ShoppingCart /> */}</div>
        <div>
          <h1>DB - Characters</h1>
          {characters?.map((character) => (
            <div key={character.id}>
              <img src={character.image} alt={character.name} />
              <p>
                {character.name} - {character.status}
              </p>
            </div>
          ))}
          {/*
          <h1>Product List</h1>
          <ProductList /> */}
        </div>
      </div>
    </>
  )
}

export default App
