import React, { useState } from 'react'
import { data } from '../../../data'

const PropDrilling = () => {
  const [people, setPeople] = useState(data)

  const removePerson = (id) => {
    setPeople(people.filter((p) => p.id !== id))
  }

  return (
    <div>
      <List people={people} removePerson={removePerson} />
    </div>
  )
}

const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((p) => {
        return <SinglePerson key={p.id} {...p} removePerson={removePerson} />
      })}
    </>
  )
}

const SinglePerson = ({ id, name, removePerson }) => {
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>Remove</button>
    </div>
  )
}

export default PropDrilling
