import { takeLatest, all, put, call } from 'redux-saga/effects';

import * as actions from '../actions/auth';
import Auth from '../../services/auth';

function* authSendCadastroWorker(data) {
	try {
		const {email, endereco, nome,  nome_usuario, senha} = data.payload;

		const success = yield call(Auth.registerUser, email, endereco, nome, nome_usuario, senha);
		console.log('teste', success);

		if(success){
			yield put (actions.authSendCadastroSuccess());
		}


	} catch (error) {
		console.log(`Erro ${error}, tente novamente mais tarde`);
		yield put(actions.authError(error));
	}
}

function* authSendCadastroWatcher() {
	yield takeLatest(actions.AUTH_SEND_CADASTRO, authSendCadastroWorker);
}

function* authWatcher() {
	yield all([
		authSendCadastroWatcher(),
	]);
}

export default authWatcher;