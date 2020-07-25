import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../store/reducers';
import { TABLE_VIEW } from '../constants/views';

const middlewares = [applyMiddleware(thunk)];

const reducerInitialState = {
	view: {
		activeView: TABLE_VIEW
	},
	athlete: {
		athletes: [],
		isFetching: false,
		errorMessage: ''
	}
};

function render(
	ui,
	{
		initialState = reducerInitialState,
		store = createStore(rootReducer, compose(...middlewares)),
		...renderOptions
	} = {}
) {
	function Wrapper({ children }) {
		return <Provider store={store}>{children}</Provider>;
	}

	return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';

// override render method
export { render };
