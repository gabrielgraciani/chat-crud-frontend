import { all } from 'redux-saga/effects';

import authSaga from './sagas/auth';
import userSaga from './sagas/user';
import chatSaga from './sagas/chat';

export default function* rootSaga() {
	yield all([
		authSaga(),
		userSaga(),
		chatSaga()
	]);
}
