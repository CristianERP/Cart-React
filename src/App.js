import React from 'react'

import ListCart from './components/List'
import Navbar from './components/Navbar'

import './App.css'

import { useGlobalContext } from './context'

function App() {
  const { products, priceTotal, amountTotal } = useGlobalContext()

  if (products.length === 0) {
    return (
      <main>
        <Navbar amount={amountTotal} />
        <section className='container'>
          <h2>YOUR BAG</h2>
          <p style={{ textAlign: 'center' }}>is currently empty</p>
        </section>
      </main>
    )
  }

  return (
    <main>
      <Navbar amount={amountTotal} />
      <section className='container'>
        <h2>YOUR BAG</h2>
        <div className='cart-container'>
          <ListCart />
        </div>
        <div className='row-total'>
          <h3>Total</h3>
          <span>${priceTotal()}</span>
        </div>
      </section>
    </main>
  )
}

export default App
