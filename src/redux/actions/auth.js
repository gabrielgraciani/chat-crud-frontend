export const AUTH_SEND_CADASTRO = 'AUTH_SEND_CADASTRO';
export const AUTH_SEND_CADASTRO_SUCCESS = 'AUTH_SEND_CADASTRO_SUCCESS';
export const AUTH_ERROR = 'AUTH_ERROR';
export const AUTH_SEND_LOGIN = 'AUTH_SEND_LOGIN';
export const AUTH_SEND_LOGIN_SUCCESS = 'AUTH_SEND_LOGIN_SUCCESS';


export const authSendCadastro = (payload) => ({
	type: AUTH_SEND_CADASTRO,
	payload
});

export const authSendCadastroSuccess = (success) => ({
	type: AUTH_SEND_CADASTRO_SUCCESS,
	payload: {
		success
	}
});

export const authError = (error) => ({
	type: AUTH_ERROR,
	payload: {
		error
	}
});

export const authSendLogin = (payload) => ({
	type: AUTH_SEND_LOGIN,
	payload
});

export const authSendLoginSuccess = (user) => ({
	type: AUTH_SEND_LOGIN_SUCCESS,
	payload: {
		user
	}
});