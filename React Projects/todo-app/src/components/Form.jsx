import React, { useState } from 'react';
import TodoList from './TodoList';

const Form = () => {
  const [todo, setTodo] = useState('');
  const [todoContainer, setTodoContainer] = useState([]);

  const SaveTodo = (e) => {
    e.preventDefault();
    setTodoContainer([...todoContainer, todo]);
    setTodo('');
  };

  return (
    <>
      <form className="my-11">
        <input
          className="rounded-lg w-1/6 p-2 outline-transparent"
          type="text"
          placeholder="Enter a Todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />

        <button className="bg-green-500 hover:bg-green-700 text-white mx-2 p-2 rounded-lg" type="button" onClick={SaveTodo}>
          Save Todo
        </button>

        <TodoList setTodoContainer={setTodoContainer} todoContainer={todoContainer} setTodo={setTodo} />
      </form>
    </>
  );
};

export default Form;
