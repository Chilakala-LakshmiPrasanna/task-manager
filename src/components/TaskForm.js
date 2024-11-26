import React, { useState } from 'react';
import './TaskForm.css';

function TaskForm({ addTask }) {
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (taskTitle.trim()) {
        addTask({ id: Date.now(), title: taskTitle, description: taskDescription, completed: false });
        setTaskTitle('');
        setTaskDescription('');
      }
    };
  
    return (
      <form onSubmit={handleSubmit} className="task-form">
        <input
          type="text"
          placeholder="Task title..."
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
        <textarea
          placeholder="Task description..."
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    );
  }

export default TaskForm;