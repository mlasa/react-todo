import React, { useState } from 'react';

import TodoForm from '../TodoForm/TodoForm';
import Todo from '../Todo/Todo';


const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    if (!task.text || /^\s*$/.test(task.text)) {
      return;
    }
    const newTasks = [task, ...tasks];
    setTasks(newTasks);
  };

  const updateTask = (taskId, newValue) => {
    console.log(taskId)
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    console.log(taskId)
    setTasks(prev => prev.map(item => (
      item.id === taskId ? item.text = newValue : item
    )));
    console.log(taskId)
  };

  const completeTask = id => {
    let updatedCompletionTasks = tasks.map(task => {
      if (task.id === id) {
        task.isComplete = !task.isComplete;
      }
      return task;
    });
    setTasks(updatedCompletionTasks);
  };

  const removeTask = id => {
    const arrWithoutRemovedTasks = tasks.filter(task => task.id !== id);

    setTasks(arrWithoutRemovedTasks);
  };

  return (
    <>
      <TodoForm onSubmit={addTask} />
      <Todo tasks={tasks}
        completeTask={completeTask}
        removeTask={removeTask}
        updateTask={updateTask}
      />
    </>
  );
};
export default TodoList;