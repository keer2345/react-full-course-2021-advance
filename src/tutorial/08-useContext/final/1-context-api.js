import React, { useState, useContext } from 'react'
import { data } from '../../../data'

const PersonContext = React.createContext()

// two components - Provider, Consumer

const ContextAPI = () => {
  const [people, setPeople] = useState(data)
  const removePerson = (id) => {
    setPeople(people.filter((p) => p.id !== id))
  }
  return (
    <PersonContext.Provider value={{ removePerson, people }}>
      <h3>Context API / useContext</h3>
      <List />
    </PersonContext.Provider>
  )
}

const List = () => {
  const peopleData = useContext(PersonContext)
  return (
    <>
      {peopleData.people.map((p) => {
        return <SinglePerson key={p.id} {...p} />
      })}
    </>
  )
}
const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext)

  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  )
}

export default ContextAPI
