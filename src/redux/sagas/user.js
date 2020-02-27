import { takeLatest, all, put, call, select } from 'redux-saga/effects';
import firebase, {db} from 'services/firebase';
import { findIndex, filter } from 'lodash';

import * as actions from '../actions/user';
import User from '../../services/user';

function* userSendWorker(data) {
	try {
		const {nome, endereco, email, nome_usuario, senha} = data.payload;

		let newDoc = db.collection('users').doc();
		const id = newDoc.id;
		newDoc.set({
			email,
			endereco,
			nome,
			nome_usuario,
			senha,
			createdAt: firebase.firestore.FieldValue.serverTimestamp()
		});

		yield put (actions.userSavedSuccess({
			id,
			email,
			endereco,
			nome,
			nome_usuario,
			senha,
		}));

		yield put(actions.userCloseForm());

	} catch (error) {
		alert(`Erro ${error}, tente novamente mais tarde`);
	}
}

function* userFetchWorker() {
	try {
		const { last, endInfiniteScroll } = yield select(store => store.user);

		const {user, lastVisible, end} = yield call(User.getItens, last, endInfiniteScroll);
		yield put(actions.userFullFilled(user, lastVisible, end));

	} catch (error) {
		console.log(`Erro ${error}, tente novamente mais tarde`);
	}
}

function* userDeleteWorker(data){
	try{
		const id = data.payload;
		db.collection('users').doc(id).delete().then(() => {
			console.log("user deletado com sucesso");
		});

		const { list } = yield select(store => store.user);
		const updatedList = filter([...list], user => user.id !== id);

		yield put(actions.userUpdateList(updatedList));
	} catch(error){
		alert(`Erro ${error}, tente novamente mais tarde`);
	}
}

function* userShowEditWorker(data){
	try{
		yield put(actions.userEditFullFilled(data.payload));

	} catch(error){
		alert(`Erro ${error}, tente novamente mais tarde`);
	}
}

function* userUpdateWorker(data){
	try {

		const {id, nome, endereco, email, nome_usuario, senha} = data.payload;

		const { list } = yield select(store => store.user);
		const i = findIndex(list, { id });
		const updatedList = [...list];

		if (i !== -1) {

			yield db.collection('users').doc(id).update({
				email,
				endereco,
				nome,
				nome_usuario,
				senha,
			});

			updatedList[i] = {
				id,
				email,
				endereco,
				nome,
				nome_usuario,
				senha,
			};
			yield put(actions.userUpdateList(updatedList));

			yield put(actions.userCloseForm());

		}

	} catch(error) {
		alert(`Erro ${error}, tente novamente mais tarde`);
	}
}

function* userSendWatcher() {
	yield takeLatest(actions.USER_SEND, userSendWorker);
}

function* userFetchWatcher() {
	yield takeLatest(actions.USER_FETCH, userFetchWorker);
}

function* userDeleteWatcher(){
	yield takeLatest(actions.USER_DELETE, userDeleteWorker);
}

function* userShowEditWatcher(){
	yield takeLatest(actions.USER_SHOW_EDIT, userShowEditWorker);
}

function* userUpdateWatcher(){
	yield takeLatest(actions.USER_UPDATE, userUpdateWorker);
}

function* userWatcher() {
	yield all([
		userSendWatcher(),
		userFetchWatcher(),
		userDeleteWatcher(),
		userShowEditWatcher(),
		userUpdateWatcher(),
	]);
}

export default userWatcher;
