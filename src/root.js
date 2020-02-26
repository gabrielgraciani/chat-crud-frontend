import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';

import configRedux from './redux/configRedux';
const store = configRedux();

const Root = () => (
	<CookiesProvider>
		<Provider store={store}>
			<BrowserRouter>
				<Route component={App}/>
			</BrowserRouter>
		</Provider>
	</CookiesProvider>
);

export default Root;
