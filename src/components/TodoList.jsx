import React from "react";

function TodoList({ todos, setTodos, setEditTodo }) {
  const handleComplete = (todo) => {
    setTodos(
      todos.map((i) => {
        if (i.id === todo.id) {
          return { ...i, completed: !i.completed };
        }
        return i;
      })
    );
  };

  const handleEdit = ({ id }) => { 
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  }

  const handleDelete = ({ id }) => {
    setTodos(todos.filter((t) => t.id !== id));
  };
  return (
    <div>
      {todos.map((todo) => (
        <li className="list-item" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className="list"
            onChange={(e) => e.preventDefault()}
          />
          <div>
            <button
              className="button-complete task-button"
              onClick={() => handleComplete(todo)}
            >
              <i className="fa fa-check-circle"></i>
            </button>
            <button className="button-edit task-button" onClick={() => handleEdit(todo)}>
              <i className="fa fa-edit"></i>
            </button>
            <button
              className="button-delete task-button"
              onClick={() => handleDelete(todo)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
}
export default TodoList;
