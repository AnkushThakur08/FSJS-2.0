import React from 'react';

import DeleteIcon from '../Assets/trash.svg';
import EditIcon from '../Assets/Edit.svg';

const TodoList = ({ todoContainer, setTodoContainer, setTodo }) => {
  const deleteTodo = (id) => {
    const updatedTodo = todoContainer.filter((_, todo) => todo !== id);
    setTodoContainer(updatedTodo);
  };

  const editTodo = (todo, id) => {
    console.log('TODO', todo);
    const updateTodo = todoContainer.find((element) => element == todo);
    setTodo(updateTodo);
    deleteTodo(id);
  };

  return (
    <>
      <div className="my-10">
        {todoContainer.map((todo, id) => {
          return (
            <ul className="my-2" key={id}>
              <li className="flex justify-evenly">
                {todo}
                <img src={DeleteIcon} alt="DeleteIcon" onClick={() => deleteTodo(id)} className="w-5 cursor-pointer" />
                <img src={EditIcon} alt="Edit Icon" onClick={() => editTodo(todo, id)} className="-ml-96 w-5 cursor-pointer" />
              </li>
            </ul>
          );
        })}
      </div>
    </>
  );
};

export default TodoList;
