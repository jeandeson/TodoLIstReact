import React from 'react';
import {CgClose, CgInfo, CgPen} from 'react-icons/cg'
import './Task.css'
import {useHistory} from 'react-router-dom'


const Task = ({task, handleTaskClick, handleTaskRemove, showDropdown}) => {

const history = useHistory()

const handleTaskDetails = () => {
  history.push(`/${task.title}`)
}

  return ( 
    <div className="task-container"
     style={task.completed ? {borderLeft: '6px solid chartreuse'} : {}}>
       <div onClick={() => handleTaskClick(task.id)} className="task-title">
          {task.title}
       </div>
       <div className="buttons-container">
         <button onClick={() => handleTaskRemove(task.id)} className="remove-task-button">
           <CgClose/>
         </button>
         <button onClick={showDropdown} className="remove-task-button">
           <CgPen/>
         </button>
         <button onClick={handleTaskDetails} className="see-task-details-button">
           <CgInfo/>
         </button>
       </div>
    </div> 
  );
}
 
export default Task;