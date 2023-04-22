import React, { useState } from 'react'
import Task from './Task.jsx'

const Home = () => {
  // const [inputValue, setInputValue] = useState(0)
  return (
    <div className="container">
      <h1>Add your Goals here</h1>
      <form>
        <input type="text" placeholder='Title' />
        <textarea placeholder='Description'></textarea>

        <button type='submit'>Submit</button>
      </form>

      <Task />
    </div>
  )
}

export default Home