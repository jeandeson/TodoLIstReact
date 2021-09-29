import React from 'react';
import Task from './Task';

const Tasks = ({tasks, handleTaskClick, handleTaskRemove, showDropdown}) => {
  return (
    <>
      {tasks.map(task => <Task key={task.id} task={task} handleTaskClick={handleTaskClick} handleTaskRemove={handleTaskRemove} showDropdown={showDropdown} />)}
    </>
  )
}

export default Tasks