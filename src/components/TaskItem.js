import React from 'react';
import './TaskItem.css';

function TaskItem({ task, updateTask, deleteTask }) {
  const toggleCompletion = () => {
    updateTask({ ...task, completed: !task.completed });
  };

  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div onClick={toggleCompletion} className="task-details">
        <h3>{task.title}</h3>
        {task.description && <p>{task.description}</p>}
      </div>
      <button onClick={() => deleteTask(task.id)} className="delete-button">Delete</button>
    </li>
  );
}

export default TaskItem;