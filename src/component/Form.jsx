import React, {useState} from "react";
import './stylesheets/Form.css'
import {v4 as uuidv4} from 'uuid'
import { PiDropSimple } from "react-icons/pi";
export default function Form(props) {

  const [input, setInput] = useState('')

  const manageChange = e => {
    console.log('writing')
    setInput(e.target.value)
  }

  const manageSend = e => {
    e.preventDefault()
    const newChore = {
      id: uuidv4(),
      text: input,
      done: false
    }
    props.onSubmit(newChore);
  }
  return (
    <form className="chore-form"
    onSubmit={manageSend}>
      <input
        className="input-chore"
        placeholder="Add a chore"
        name='text'
        type="text"
        onChange={manageChange}>
      </input>
      <button
        className="chore-button">
          Add chore
      </button>
    </form>

  )

}
