import React from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <>
      <div className="text-center bg-[#CAD5E2] h-screen">
        <h1 className="text-3xl font-bold">Todo App</h1>
        <Form />
      </div>
    </>
  );
};

export default App;
