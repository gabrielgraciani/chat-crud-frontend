import { combineReducers } from 'redux';

import auth from './reducers/auth.js';
import user from './reducers/user.js';

const reducers = combineReducers({
	auth,
	user
});

const rootReducer = (state, action) => reducers(state, action);

export default rootReducer;
