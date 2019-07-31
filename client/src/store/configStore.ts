import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middlewares = [applyMiddleware(thunk)];

if (process.env.NODE_ENV !== 'production' && (window as any).__REDUX_DEVTOOLS_EXTENSION__) {
	middlewares.push((window as any).__REDUX_DEVTOOLS_EXTENSION__());
}

const store = createStore(rootReducer, compose(...middlewares));

export default store;
