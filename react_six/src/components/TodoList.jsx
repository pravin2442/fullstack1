import React, { useState } from 'react';
import TodoItem from './TodoItem'; // Import TodoItem to render individual todos
import TodoForm from './TodoForm'; // Import TodoForm to add new todos

const TodoList = () => {
  const [todos, setTodos] = useState([]); // State to store todos

  // Function to add a new todo
  const addTodo = (todo) => {
    setTodos([...todos, { text: todo, id: Date.now(), completed: false }]);
  };

  // Function to remove a todo
  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Function to toggle the completion status of a todo
  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div>
      <TodoForm addTodo={addTodo} /> {/* Form to add new todos */}
      <ul>
        {todos.map(todo => (
          <TodoItem 
            key={todo.id} 
            todo={todo} 
            removeTodo={removeTodo} 
            toggleComplete={toggleComplete} // Pass toggleComplete to TodoItem
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
