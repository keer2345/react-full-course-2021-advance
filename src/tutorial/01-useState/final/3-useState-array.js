import React, { useState } from 'react'
import { data } from '../../../data'

const UseStateArray = () => {
  const [people, setPeople] = useState(data)
  const removeItem = (id) => {
    let newPeople = people.filter((p) => p.id !== id)
    setPeople(newPeople)
  }

  return (
    <>
      {people.map((p) => {
        const { id, name } = p
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>Remove</button>
          </div>
        )
      })}
      <button className='btn' onClick={() => setPeople([])}>
        Clear items
      </button>
      <button className='btn' onClick={() => setPeople(data)}>
        Recall items
      </button>
    </>
  )
}

export default UseStateArray
