import {createStore, applyMiddleware } from 'react';
import rootReducer from '../reducers/root_reducer';
import thunk from 'react-thunk';
import logger from 'react-logger';

const configureStore = (preloadedState = {}) => (
    createStore(rootReducer,preloadedState, applyMiddleware(thunk, logger))
);

export default configureStore;