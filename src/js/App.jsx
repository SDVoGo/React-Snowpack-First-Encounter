import React from 'react'
import Header from './component/Header'
import { useState } from 'react'
import Tasks from './component/Tasks'
import Task from './component/Task'
import AddTask from './component/AddTask'
import { object } from 'prop-types'

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTask] = useState([
    {
      id:1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id:2,
      text: 'Meeting',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id:3,
      text: 'Dinner',
      day: 'Feb 5th at 2:30pm',
      reminder: false,
    },
  ])

  // Toggle Add Task
  const toggleAddTask = () => {
    // Long Version
    // showAddTask ? setShowAddTask(false) : setShowAddTask(true);
    // Short one
    setShowAddTask(!showAddTask);
  }

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random()*10000)+1;
    const newTask = { id, ...task };
    setTask([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id))
    // console.log(`delete ${id}`)
  }

  // Toggle Reminder
  const toggleReminder = (id) =>{
    setTask(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className='container'>
      <Header title='Task Tracker' onAddBtnClick={toggleAddTask} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> 
      : 'No tasks to show'}  
    </div>
  )
}

export default App