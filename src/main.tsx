import React from 'react'
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import { logger } from './middlewares/index'

import { rootReducer } from './reducers/rootReducer';
import App from './App'
import './index.css'

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composeEnhancers = composeAlt(applyMiddleware(thunk, logger)
)

const store = createStore(
  rootReducer,
  composeEnhancers
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
)
