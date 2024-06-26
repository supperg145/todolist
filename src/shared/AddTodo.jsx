import React, { Component } from 'react';
import MyTodo from './MyTodo';

export default class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      todoTitle: "",
      description: "",
      todos: [] // Add a todos array to the state
    };
  } 

  handleInputTodo = (e) => {
    this.setState({ todoTitle: e.target.value });
  }

  handleInputDescription = (e) => {
    this.setState({ description: e.target.value });
  }

  addTodo = (e) => {
    // Add a new todo item to the list
    this.setState(prevState => ({
      todos: [...prevState.todos, { title: prevState.todoTitle, description: prevState.description }],
      todoTitle: "", // Clear the input fields after adding
      description: ""
    }));
  }

  deleteTodo = (index) => {
    // Delete a todo item from the list
    this.setState(prevState => {
      const todos = [...prevState.todos];
      todos.splice(index, 1);
      return { todos };
    });
  }

  render() {
    return (
      <div>
        <h1>Add a new task</h1>
        <input 
          type="text" 
          placeholder="Add Todo" 
          value={this.state.todoTitle} 
          onChange={this.handleInputTodo} 
        />
        <input 
          type="text" 
          placeholder="Add Description" 
          value={this.state.description} 
          onChange={this.handleInputDescription} 
        />
        <button onClick={this.addTodo}>Add</button>
        <MyTodo 
          todos={this.state.todos} 
          deleteTodo={this.deleteTodo} 
        />
      </div>
    );
  }
}
