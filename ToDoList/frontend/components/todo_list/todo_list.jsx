import React from 'react';
import {ToDoListItem} from './todo_list_item';
import ToDoForm from './todo_form';

const ToDoList = ({todos, receiveTodo}) => {
  return (
    <div>
      <h3>Todo List goes here!</h3>
      <ul>
        {todos.map((todo) => ToDoListItem(todo))}
      </ul>
      <div><ToDoForm receiveTodo={receiveTodo}/></div>
  </div>
)};

export default ToDoList;
