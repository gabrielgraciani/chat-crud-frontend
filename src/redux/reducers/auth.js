import * as actions from '../actions/auth';

export const initialState = {
	email: '',
	endereco: '',
	nome: '',
	nome_usuario: '',
	senha: '',
	isSaving: false,
	error: false,
	success: false
};


export default function authReducer(
	state = initialState,
	{ type, payload }
) {
	switch (type) {
		case actions.AUTH_SEND_CADASTRO:
			return {
				...initialState,
				...state,
				isSaving: true,
			};

		case actions.AUTH_SEND_CADASTRO_SUCCESS:
			return {
				...initialState,
				...state,
				isSaving: false,
				success: payload.success
			};

		case actions.AUTH_ERROR:
			return {
				...initialState,
				...state,
				isSaving: false,
				error: payload.error
			};

		default:
			return state;
	}
}