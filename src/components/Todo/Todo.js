import React, { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'

import './Todo.css';

import TodoForm from '../TodoForm/TodoForm';

const Todo = ({ tasks, completeTask, removeTask, updateTask }) => {
  const [tasksEdited, setTasksEdited] = useState({
    id: null,
    value: '',
  });

  const submitUpdate = value => {
    console.log(value)
    updateTask(tasksEdited.id, value);
    setTasksEdited({
      id: null,
      value: '',
    });
  };


  if (tasksEdited.id) {
    return <TodoForm edit={tasksEdited} onSubmit={submitUpdate} />
  }

  return tasks.map((task, index) => (
    <div className={task.isComplete ? 'todo-row complete' :
      'todo-row'} key={index}
    >
      <div className='todo-row-text' key={task.id} onClick={() => completeTask(task.id)}>
        <p>
          {task.text}
        </p>
      </div>
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => { removeTask(task.id) }}
          className='delete-icon' size='30px'
        />
        <TiEdit
          onClick={() => { setTasksEdited({ id: task.id, value: task.text }) }}
          className='edit-icon' size='30px'
        />
      </div>
    </div >
  ))
};

export default Todo;
