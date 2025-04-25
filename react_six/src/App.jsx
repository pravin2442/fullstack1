import React from 'react';
import TodoList from './components/TodoList'; // Import the TodoList component
import './app.css'; // App-wide styles

function App() {
  return (
    <div className="App">
      <div className="todo-container">
        <h1 className="todo-heading">📝 Task List</h1>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
