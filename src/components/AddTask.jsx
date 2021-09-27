import React, { useState } from 'react';

import Button from './Button';
import './Addtask.css';

const AddTask = ({handleTaskAddition}) => {

  const [inputData, setInputData] = useState('');
  const handleInputChange = (event) => {
    setInputData(event.target.value)
  }

  const handleAddTaskClick = () => {
    handleTaskAddition(inputData)
    setInputData('')
  }

  return ( 
    <div className="add-task-container">
      <input onChange={handleInputChange} className="add-task-input" value={inputData} type="text"/>
      <div className="add-button-container">
        <Button onClick={handleAddTaskClick}> Adicionar </Button>
      </div>
    </div>
   );
}
 
export default AddTask;