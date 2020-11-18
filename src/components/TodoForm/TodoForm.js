import React, { useState, useRef, useEffect } from 'react';

import './TodoForm.css';

const ToDoForm = (props) => {
  const [input, setInput] = useState('');

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!props.edit) {
      console.log('edit', props.edit)
      props.onSubmit({
        id: Math.floor(Math.random() * 1000),
        text: input,
      });
    }
    else {
      props.onSubmit({
        id: props.edit.id,
        text: input,
      });
    }

    setInput('');
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          value={input}
          name='text'
          placeholder='Nova tarefa'
          className='todo-input'
          onChange={handleChange}
          ref={inputRef}
        />
        <button className='todo-button'>Adicionar</button>
      </form>
    </div>
  )
};
export default ToDoForm;