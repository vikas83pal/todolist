import React from "react";
import { useState } from 'react';

const Form = () => {

  const [todoItem, setTodoItem] = useState("");
  const [description,setDescription] = useState("");
  const [todoList,setTodoList] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (todoItem && description) {
      // Add new todo item to the list
      setTodoList([...todoList, { item: todoItem, description }]);
      // Clear input fields
      setTodoItem('');
      setDescription('');
    }
  };

  const handleDelete = (index) =>{
      const newTodoList = [...todoList];
      newTodoList.splice(index,1);
      setTodoList(newTodoList);

  }
  return (
    <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="todoItem" className="form-label">Todo Item</label>
            <input
              type="text"
              className="form-control"
              id="todoItem"
              value={todoItem}
              onChange={(e) => setTodoItem(e.target.value)}
              aria-describedby="todoHelp"
              autoComplete="off" // Disable autocomplete
            />
            <p className="form-text">Enter your todo item here.</p>
          </div>
          <div className="mb-5">
            <label htmlFor="description" className="form-label">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              autoComplete="off" // Disable autocomplete
            />
            <p className="form-text">Enter the description here.</p>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <ul className="mt-5 list-group">
          {todoList.map((todo, index) => (
            <li key={index} className="list-group-item">
              <div>
              <h5>{index + 1}. {todo.item}</h5>              
              <p>{todo.description}</p>
              </div>
              <button className="btn btn-danger" onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
  );
}

export default Form;
