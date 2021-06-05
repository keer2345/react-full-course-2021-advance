import React, { useState, useEffect } from 'react'

const UseEffectBasics = () => {
  const [value, setValue] = useState(0)
  useEffect(() => {
    console.log('call useEffect')
    if (value > 0) {
      document.title = `New Message(${value})`
    }
  }, [value])
  console.log('render component')
  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        increase
      </button>
    </>
  )
}

export default UseEffectBasics
