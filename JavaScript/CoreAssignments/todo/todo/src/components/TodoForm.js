import React, { useState } from "react";
import './Display.css';
const TodoForm = (props) => {
  const { todoList, setTodoList } = props;
  const [todoItem, setTodoItem] = useState({
    task: "",
    completed: false
  });

  const changeHandler = (e) => {
    setTodoItem({ ...todoItem, [e.target.name]: e.target.value })
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setTodoList([...todoList, todoItem])
    setTodoItem({
      task: "",
      completed: false
    })
  };

  return (
    <div>
      <h1>
        Todo-List
      </h1>
      <form onSubmit={submitHandler}>
        <label>Enter A Task:</label>
        <input type="text" name="task" onChange={changeHandler} value={todoItem.task} />
        <input type="submit" value="Add Task" />
      </form>
    </div>
  )
}
export default TodoForm;