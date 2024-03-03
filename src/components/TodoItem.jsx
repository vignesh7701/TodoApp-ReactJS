import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoItem({ input, todos, setTodos, setInput, editTodo, setEditTodo }) {
  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) => 
      todo.id === id ? { title, id, completed } : todo
    )

    setTodos(newTodo);
    setEditTodo("");
  };

  const whileSubmit = (e) => {
    e.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);

  const inputTextHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <form onSubmit={whileSubmit}>
      <input
        type="text"
        placeholder="Enter a Todo..."
        className="task-input"
        value={input}
        required
        onChange={inputTextHandler}
      />
      <button className="button-add" type="submit">
        {editTodo ? "OK" : "Add"}
      </button>
    </form>
  );
}

export default TodoItem;
