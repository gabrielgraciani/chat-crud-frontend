import { combineReducers } from 'redux';

import auth from './reducers/auth.js';

const reducers = combineReducers({
	auth
});

const rootReducer = (state, action) => reducers(state, action);

export default rootReducer;
