import React from 'react';
import Button from './Button';
import { useParams } from 'react-router-dom';

const TaskDetails = () => {
  const params = useParams();

 

  return (
    <>
      <div className="back-button-container">
        <Button>Voltar</Button> 
        <div className="task-details-container">
          <h2>{params.taskTitle}</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, sit non consequatur illo perspiciatis earum.</p>
        </div>
      </div>
    </>
  );
};

export default TaskDetails;
