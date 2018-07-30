import React from 'react';
import { Provider } from 'react-redux';
import App from './app';
import ToDoListContainer from './todos/todo_list_container';

const Root = ({ store }) => (
  <Provider store={ store }>
    <App />
    <ToDoListContainer />
  </Provider>
);


export default Root;
