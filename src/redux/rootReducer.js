import { combineReducers } from 'redux';

import auth from './reducers/auth.js';
import user from './reducers/user.js';
import chat from './reducers/chat.js';

const reducers = combineReducers({
	auth,
	user,
	chat
});

const rootReducer = (state, action) => reducers(state, action);

export default rootReducer;
