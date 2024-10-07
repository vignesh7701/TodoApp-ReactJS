import {useEffect, useState} from "react";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
import Header from "./components/Header";

import './App.css'
function App() {

  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container">
      <div className="app-wrap">
        <div>
          <Header />
        </div>
        <div>
          <TodoItem
            input={input}
            todos={todos}
            setTodos={setTodos}
            setInput={setInput} 
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <TodoList
            todos={todos}
            setTodos={setTodos}
            setEditTodo={setEditTodo}
          />
        </div>
      </div>
    </div>
  );
}
export default App;
