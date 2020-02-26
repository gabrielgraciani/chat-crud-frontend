import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer.js';
import rootSaga from './rootSaga';

const bindMiddleware = (...middleware) => composeWithDevTools(applyMiddleware(...middleware));

export default function configRedux(initialState) {
	const reducer = rootReducer;
	const sagaMiddleware = createSagaMiddleware();
	const store = createStore(reducer, initialState, bindMiddleware(sagaMiddleware));

	store.sagaTask = sagaMiddleware.run(rootSaga);

	return store;
}
