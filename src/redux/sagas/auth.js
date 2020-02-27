import { takeLatest, all, put, call } from 'redux-saga/effects';

import * as actions from '../actions/auth';
import Auth from '../../services/auth';

function* authSendCadastroWorker(data) {
	try {
		const {email, endereco, nome,  nome_usuario, senha} = data.payload;

		const success = yield call(Auth.registerUser, email, endereco, nome, nome_usuario, senha);

		if(success){
			yield put (actions.authSendCadastroSuccess(true));
		}


	} catch (error) {
		//console.log(`Erro ${error}, tente novamente mais tarde`);
		yield put(actions.authError(error));
	}
}

function* authSendLoginWorker(data){
	try{
		const {email, senha} = data.payload;

		const {id, nome} = yield call(Auth.loginUser, email, senha);

		yield put(actions.authSendLoginSuccess(id, nome));



	} catch (error){
		//console.log(`Erro ${error}, tente novamente mais tarde`);
		yield put(actions.authError(error));
	}
}

function* authSendCadastroWatcher() {
	yield takeLatest(actions.AUTH_SEND_CADASTRO, authSendCadastroWorker);
}

function* authSendLoginWatcher(){
	yield takeLatest(actions.AUTH_SEND_LOGIN, authSendLoginWorker);
}

function* authWatcher() {
	yield all([
		authSendCadastroWatcher(),
		authSendLoginWatcher(),
	]);
}

export default authWatcher;