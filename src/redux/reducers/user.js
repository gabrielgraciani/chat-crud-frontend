import * as actions from '../actions/user';

export const initialState = {
	active: '',
	data: [],
	endInfiniteScroll: false,
	isLoading: false,
	isEditing: false,
	last: '',
	list: [],
	nome: '',
	nome_usuario: '',
	senha: '',
	endereco: '',
	email: '',
	saving: false,
	listSearch: []
};

export default function userReducer(
	state = initialState,
	{ type, payload }
) {
	switch (type) {
		case actions.USER_SEND:
			return {
				...initialState,
				...state,
				data: [payload],
				saving: true,
			};

		case actions.USER_SAVED_SUCCESS:
			return{
				...initialState,
				...state,
				list: [
					payload,
					...state.list
				],
				listSearch: [
					payload,
					...state.listSearch
				],
				saving: false
			};

		case actions.USER_FETCH:
			return {
				...initialState,
				...state,
				...payload,
				isLoading: true
			};

		case actions.USER_FULLFILLED:
			return {
				...initialState,
				...state,
				endInfiniteScroll: payload.endInfiniteScroll,
				isLoading: false,
				last: payload.last,
				list:[
					...state.list,
					...payload.list,
				],
			};

		case actions.USER_SHOW_EDIT:
			return {
				...initialState,
				...state,
				active: "active",
				data: [payload],
				isEditing: true,
			};

		case actions.USER_EDIT_FULLFILLED:
			return {
				...initialState,
				...state,
				...payload,
			};

		case actions.USER_DELETE:
			return {
				...initialState,
				...state,
				data: [payload],
			};

		case actions.USER_UPDATE:
			return {
				...initialState,
				...state,
				data: [payload],
				saving: true,
			};

		case actions.USER_UPDATE_LIST:
			return {
				...initialState,
				...state,
				list: [
					...payload.list
				],
				saving: false
			};

		case actions.USER_OPEN_FORM:
			return{
				...initialState,
				...state,
				active: "active"
			};

		case actions.USER_CLOSE_FORM:
			return{
				...initialState,
				...state,
				active: "",
				isEditing: false,
				payload: {
					nome: '',
					nome_usuario: '',
					senha: '',
					endereco: '',
					email: '',
				}
			};

		default:
			return state;
	}
}
