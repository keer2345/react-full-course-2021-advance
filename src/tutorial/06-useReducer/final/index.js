import React, { useState, useReducer } from 'react'
import Modal from './Modal'
import { data } from '../../../data'

const reducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const newPeople = [...state.people, action.payload]
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: 'item add success'
    }
  }
  if (action.type === 'NO_VALUE') {
    return {
      ...state,
      isModaleOpen: true,
      modalContent: 'please enter value'
    }
  }
  throw new Error('no matching action type')
}
const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: 'hello modal'
}

const Index = () => {
  const [name, setName] = useState('')

  const [state, dispatch] = useReducer(reducer, defaultState)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name) {
      const newPeople = { id: new Date().getTime().toString(), name }
      dispatch({ type: 'ADD_ITEM', payload: newPeople })
      setName('')
    } else {
      dispatch({ type: 'NO_VALUE' })
    }
  }
  return (
    <>
      {state.isModalOpen && <Modal modalContent={state.modalContent} />}
      <form onSubmit={handleSubmit} className='form'>
        <div>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type='submit'>Add</button>
      </form>
      {state.people.map((p) => {
        const { id, name } = p
        return (
          <div key={id}>
            <h4>{name}</h4>
          </div>
        )
      })}
    </>
  )
}

export default Index
