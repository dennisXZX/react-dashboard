import React from 'react';
import ReactDOM from 'react-dom';
import {
  applyMiddleware,
  compose,
  createStore,
} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import 'antd/dist/antd.css';
import './index.css';

import App from './components/App';
import reducers from './store/reducers';

const middlewares = [applyMiddleware(thunk)];

if (process.env.NODE_ENV !== 'production' && (window as any).__REDUX_DEVTOOLS_EXTENSION__) {
  middlewares.push((window as any).__REDUX_DEVTOOLS_EXTENSION__());
}

const store = createStore(reducers, compose(...middlewares));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
