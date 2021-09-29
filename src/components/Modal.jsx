
import React,{ useState} from 'react';
import Button from './Button';

import './modal.css'
import './Addtask.css';

const Modal = props => {
  const {className, modalRef} = props;
  
  const [inputData, setInputData] = useState('');
  const handleInputChange = (event) => {
    setInputData(event.target.value)
  }

  return(
    <div ref={modalRef} className={`${className} modal`}>
      <p>Editar tarefa</p>
      <div className="add-task-container">
        <input onChange={handleInputChange} className="add-task-input" value={inputData} type="text"/>
        <div className="add-button-container">
          <Button>
            Editar
          </Button>
        </div>
      </div>
    </div>
  )
}
 
export default Modal;