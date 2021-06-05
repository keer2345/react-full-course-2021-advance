import React, { useState, useEffect } from 'react'

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth)

  const checkSize = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    // This gets called after every render, by default
    // (the first one, and every one after that)
    console.log('useEffect')
    window.addEventListener('resize', checkSize)

    // If you want to implement componentWillUnmount,
    // return a function from here, and React will call
    // it prior to unmounting.
    return () => {
      console.log('cleanup')
      window.removeEventListener('resize', checkSize)
    }
  },[])

  console.log('render')

  return (
    <>
      <h1>Window</h1>
      <h2>{size} PX</h2>
    </>
  )
}

export default UseEffectCleanup
