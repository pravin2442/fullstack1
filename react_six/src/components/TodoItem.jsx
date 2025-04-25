import React from 'react';
import './app.css';

const TodoItem = ({ todo, removeTodo, toggleComplete }) => {
  return (
    <li
      className={`todo-item ${todo.completed ? 'completed' : ''}`}
      onClick={() => toggleComplete(todo.id)}
    >
      <span>{todo.text}</span>
      <button
        className="delete-btn"
        onClick={(e) => {
          e.stopPropagation();
          removeTodo(todo.id);
        }}
      >
        ✖
      </button>
    </li>
  );
};

export default TodoItem;
