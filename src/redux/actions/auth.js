export const AUTH_SEND_CADASTRO = 'AUTH_SEND_CADASTRO';
export const AUTH_SEND_CADASTRO_SUCCESS = 'AUTH_SEND_CADASTRO_SUCCESS';
export const AUTH_ERROR = 'AUTH_ERROR';


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