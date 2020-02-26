import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';

import configRedux from './redux/configRedux';
const store = configRedux();

const Root = () => (
	<Provider store={store}>
		<BrowserRouter>
			<Route component={App}/>
		</BrowserRouter>
	</Provider>
);

export default Root;
