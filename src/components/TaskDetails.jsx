import React from 'react';
import Button from './Button';
import {useParams} from 'react-router'
import {useHistory} from 'react-router-dom'

import './TaskDetails.css'

const TaskDetails = () => {
  const params = useParams();
  const history = useHistory()

  const handleBackButton = () =>{
    history.goBack()
  }

  return ( 
    <>
      <div onClick={handleBackButton} className="back-button-container">
          <Button>
            Voltar
          </Button>
      </div>
      <div className="task-details-container">
        <h2>
          {params.taskTitle}
        </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Nulla praesentium, aliquam ipsam officiis laboriosam ducimus.
        </p>
      </div>
    </>
   );
}
 
export default TaskDetails;