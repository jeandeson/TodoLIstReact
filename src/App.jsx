import React, { useEffect, useState, useRef  } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import axios from 'axios'

import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Header from './components/Header';
import TaskDetails from './components/TaskDetails';
import Modal from './components/Modal';

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
      const {data} = await axios.get('http://localhost:3000/todos')
      setTasks(data)
    }
    fetchTasks()
  }, [])

  const [dropdown, setDropdown] = useState("");
  const modalRef = useRef(null);

  const showDropdown = () => {
    setDropdown("show");
    setTimeout(() => {
      document.body.addEventListener("click", closeDropdown);
    }, 200);
  }

  const closeDropdown = event => {
    event.stopPropagation(); //impede de executar listeners dos filhos
    const contain = modalRef.current.contains(event.target);
    if (!contain) {
      console.log("hidden");
      setDropdown("");
      document.body.removeEventListener("click", closeDropdown);
    }
  };


  const handleTaskAddition = (taskTitle) => {
    const newTask = {
      title: taskTitle,
      completed: false
    }

    setTasks([...tasks, newTask]);
    axios.post('http://localhost:3000/todos/', newTask)
  }

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task => {
      if(task.id === taskId) return {...task, completed: !task.completed}
      
      return task;
    })

    setTasks(newTasks)
  }

  const handleTaskRemove = async (taskId) => {
    await axios.delete(`http://localhost:3000/todos/${taskId}`)
    const newTasks = tasks.filter(task => task.id !== taskId)
    setTasks(newTasks)
  }

  return (
    <Router>
        <Modal className={dropdown} modalRef={modalRef} />
        <div className="container">
          <Header/>
          <Route path="/" exact render={() => (
            <>
              <AddTask handleTaskAddition={handleTaskAddition}/>
              <Tasks handleTaskRemove={handleTaskRemove} 
              tasks={tasks} handleTaskClick={handleTaskClick} showDropdown={showDropdown}/>
            </>
          )}/>
          <Route path="/:taskTitle" exact component={TaskDetails}/>
      </div>
    </Router>
  )
}

export default App