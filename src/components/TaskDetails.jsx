import React from 'react';
import Button from './Button';
import "./TaskDetails.css";
import { useNavigate, useParams } from 'react-router-dom';

const TaskDetails = () => {
  const params = useParams();
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate(-1);
  }

 

  return (
    <>
      
        <div className="task-details-container">
          <h2>{params.taskTitle}</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, sit non consequatur illo perspiciatis earum.</p>
        </div>
        <div className="back-button-container">
        <Button onClick={handleBackButtonClick}>Voltar</Button> 
        </div>
      
    </>
  );
};

export default TaskDetails;
