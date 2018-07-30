import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import logger from 'redux-logger';

const configureStore = () => createStore(
  rootReducer, applyMiddleware(logger)
);

export default configureStore;
