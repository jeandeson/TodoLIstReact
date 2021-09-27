import React, { useEffect, useState } from 'react';
import {v4 as uuidv4} from 'uuid'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import axios from 'axios'

import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Header from './components/Header';
import TaskDetails from './components/TaskDetails';

import './App.css'


const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar programação",
      completed: false
    },
    {
      id: 2,
      title: "Ler livros",
      completed: true
    }
  ])

  useEffect(()=>{
    const fetchTasks = async ()=>{
      const {data} = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10')
      setTasks(data)
    }

    fetchTasks()
  }, [])

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [...tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false
    }]

    setTasks(newTasks);
  }

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task => {
      if(task.id === taskId) return {...task, completed: !task.completed}
      
      return task;
    })

    setTasks(newTasks)
  }

  const handleTaskRemove = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId)
    setTasks(newTasks)
  }

  return (
    <Router>
        <div className="container">
          <Header/>
          <Route path="/" exact render={() => (
            <>
              <AddTask handleTaskAddition={handleTaskAddition}/>
              <Tasks handleTaskRemove={handleTaskRemove} 
              tasks={tasks} handleTaskClick={handleTaskClick}/>
            </>
          )}/>
          <Route path="/:taskTitle" exact component={TaskDetails}/>
      </div>
    </Router>
  )
}

export default App