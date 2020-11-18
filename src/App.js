import { useRef, useEffect } from 'react';

import './styles/global.css';
import './App.css';

import TodoList from './components/TodoList/TodoList';

function App() {
  const textRef = useRef('');

  function writer(elemRef) {
    const lettersArray = elemRef.current.innerText.split("");

    elemRef.current.innerText = "";

    lettersArray.forEach((charater, index) => {
      setTimeout(() => {
        elemRef.current.innerText += charater;
      }, 200 * index);
    });
  }


  useEffect(() => {
    writer(textRef);
  }, []);


  return (
    <div className="todo-app">
      <h1 id='todo-text' ref={textRef}>O que temos para hoje?</h1>
      <TodoList />
    </div>
  );
}

export default App;
