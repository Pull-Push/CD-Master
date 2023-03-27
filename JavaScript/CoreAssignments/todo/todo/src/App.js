import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import DisplayTodo from './components/DisplayTodo';

function App() {
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App">
      <TodoForm todoList={todoList} setTodoList={setTodoList} />
      <DisplayTodo todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
