import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import './index.css';

import HomePage from './pages/HomePage';
import store from './store/configStore';

ReactDOM.render(
	<Provider store={store}>
		<HomePage />
	</Provider>,
	document.getElementById('root')
);
