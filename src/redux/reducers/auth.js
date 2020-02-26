import * as actions from '../actions/auth';

export const initialState = {
	email: '',
	endereco: '',
	nome: '',
	nome_usuario: '',
	senha: '',
	loading: false,
	error: false,
	success: false,
	user: ''
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
				loading: true,
			};

		case actions.AUTH_SEND_CADASTRO_SUCCESS:
			return {
				...initialState,
				...state,
				loading: false,
				success: payload.success
			};

		case actions.AUTH_ERROR:
			return {
				...initialState,
				...state,
				loading: false,
				error: payload.error
			};

		case actions.AUTH_SEND_LOGIN:
			return{
				...initialState,
				...state,
				loading: true
			};

		case actions.AUTH_SEND_LOGIN_SUCCESS:
			return{
				loading: false,
				user: payload.user
			};

		default:
			return state;
	}
}