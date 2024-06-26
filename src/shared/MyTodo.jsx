import React from 'react';

export default function MyTodo(props) {
  return (
    <div>
      <h1>My Todo List</h1>
      <ul>
        {/* Render the list of todos */}
        {props.todos.map((todo, index) => (
          <li key={index}>
            <strong>{todo.title}</strong>: {todo.description}
            <button onClick={() => props.deleteTodo(index)}>Done</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
