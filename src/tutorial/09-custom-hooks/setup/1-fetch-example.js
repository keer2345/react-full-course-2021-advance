import React, { useState, useEffect } from 'react'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products'

const Example = () => {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    const response = await fetch(url)
    const products = await response.json()
    setProducts(products)
    setLoading(false)
  }

  useEffect(() => {
    getProducts()
  }, [url])

  console.log('products : ' + products)

  return (
    <div>
      <h2>Setup: {loading ? 'loading...' : 'data'}</h2>
    </div>
  )
}

export default Example
