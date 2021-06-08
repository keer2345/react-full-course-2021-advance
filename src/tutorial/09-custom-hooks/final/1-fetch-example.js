import React from 'react'
import { useFetch } from './2-useFetch'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products'

const Example = () => {
  const { loading, products } = useFetch(url)
  console.log('products : ' + products)

  return (
    <div>
      <h2>Final: {loading ? 'loading...' : 'data'}</h2>
    </div>
  )
}

export default Example
