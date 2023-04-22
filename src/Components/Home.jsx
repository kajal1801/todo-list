import React, { useEffect, useState } from 'react'
import Task from './Task.jsx'

const Home = () => {
  const [tasks, setTasks] = useState(localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if(title !== '' && description !== ''){
      setTasks([...tasks, { title, description }])
      setTitle('')
      setDescription('')
    }
    else{
      alert('Please fill the fields')
    }
  }

  const deleteTask = (index) => {
    const filterTasks = tasks.filter((item, i) => i !== index)
    setTasks(filterTasks)
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  return (
    <div className="container">
      <h1>Add your Goals here</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder='Title'
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          } />
        <textarea placeholder='Description'

          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
        ></textarea>

        <button className='btn' type='submit'>Submit</button>
      </form>

      {tasks.map((item, index) => (
        <Task
          key={index}
          title={item.title}
          description={item.description}
          deleteTask={deleteTask}
          index={index}
        />
      ))}
    </div>
  )
}

export default Home