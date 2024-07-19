import './App.css';
import React, { useState } from 'react';
import TodoList from './TodoList';

const App = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const changeHandler = (e) => {
    setTask(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newTodos = [...todos, task];
    setTodos(newTodos);
    setTask("");
  };

  const deleteHandler = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div>
      <center>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">TODO Management Application</h5>
            <form onSubmit={submitHandler}>
              <input  size="30" type="text" name="task" value={task} onChange={changeHandler} />
              &nbsp;&nbsp;
              <input type="submit" value="Add" name="Add" />
            </form>
            <TodoList todos={todos} deleteHandler={deleteHandler} />
          </div>
        </div>
      </center>
    </div>
  );
};

export default App;
