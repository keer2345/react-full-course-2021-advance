import React from 'react'
import Product from './Product'
import { useFetch } from '../../09-custom-hooks/final/2-useFetch'

const url = 'https://course-api.com/react-prop-types-example'

const Index = () => {
  const { products } = useFetch(url)
  return (
    <div>
      <h2>Setup: Products</h2>
      <section className='products'>
        {products.map((p) => {
          return <Product key={p.id} {...p} />
        })}
      </section>
    </div>
  )
}

export default Index
