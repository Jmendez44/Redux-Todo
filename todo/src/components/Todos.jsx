import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completeTodo } from '../actions';


const Todos = props => {
  return (
    <div>
      {props.todos.map(todo => (
        <li
          
          onClick={() => props.completeTodo(todo.id)}
          key={todo.id}
        >
          {todo.text}
        </li>
      ))}
    </div>
  );
};

export default connect(null, { completeTodo })(Todos);