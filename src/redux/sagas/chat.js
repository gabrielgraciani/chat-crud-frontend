import { takeLatest, all, put, call } from 'redux-saga/effects';

import * as actions from '../actions/chat';
import Chat from '../../services/chat';

function* chatSendMessageWorker(data) {
	try {
		const {message, userId, userNome} = data.payload;

		yield call(Chat.saveMessage, message, userId, userNome);

		yield put(actions.chatSendMessageSuccess());

	} catch (error) {
		console.log(`Erro ${error}, tente novamente mais tarde`);
	}
}

function* chatFetchMessageWorker() {
	try {

		const {message} = yield call(Chat.getMessages);
		yield put(actions.chatFetchMessageSuccess(message));

	} catch (error) {
		console.log(`Erro ${error}, tente novamente mais tarde`);
	}
}

function* chatSendMessageWatcher() {
	yield takeLatest(actions.CHAT_SEND_MESSAGE, chatSendMessageWorker);
}

function* chatFetchMessageWatcher() {
	yield takeLatest(actions.CHAT_FETCH_MESSAGE, chatFetchMessageWorker);
}


function* authWatcher() {
	yield all([
		chatSendMessageWatcher(),
		chatFetchMessageWatcher()
	]);
}

export default authWatcher;