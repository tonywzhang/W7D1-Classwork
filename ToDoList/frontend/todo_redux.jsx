import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
// import {receiveTodos, receiveTodo} from './actions/todo_actions';
import App from './components/app';
import {allTodos} from './reducers/selectors';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.store = store;
  // window.receiveTodos = receiveTodos;
  // window.receiveTodo = receiveTodo;
  window.allTodos = allTodos;
  ReactDOM.render(<Root store={store} />, root);
  // ReactDOM.render(<App />, root);
});
