import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import gifReducer from './gif/git.reducer';

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  combineReducers({
    gifReducer,
  }),
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
