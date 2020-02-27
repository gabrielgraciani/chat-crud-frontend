import * as actions from '../actions/chat';

export const initialState = {
	nome: '',
	message: '',
	isSending: false,
	isLoading: false,
	list: [],
};

export default function chatReducer(
	state = initialState,
	{ type, payload }
) {
	switch (type) {
		case actions.CHAT_SEND_MESSAGE:
			return{
				...initialState,
				...state,
				isSending: true,
			};

		case actions.CHAT_SEND_MESSAGE_SUCCESS:
			return{
				...initialState,
				...state,
				isSending: false
			};

		case actions.CHAT_FETCH_MESSAGE:
			return{
				...initialState,
				...state,
				...payload,
				isLoading: true
			};

		case actions.CHAT_FETCH_MESSAGE_SUCCESS:
			return{
				...initialState,
				...state,
				isLoading:false,
				list: [
					...state.list,
					...payload.list
				]
			};

		default:
			return state;
	}
}