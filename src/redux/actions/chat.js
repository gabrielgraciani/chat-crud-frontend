export const CHAT_SEND_MESSAGE = 'CHAT_SEND_MESSAGE';
export const CHAT_SEND_MESSAGE_SUCCESS = 'CHAT_SEND_MESSAGE_SUCCESS';
export const CHAT_FETCH_MESSAGE = 'CHAT_FETCH_MESSAGE';
export const CHAT_FETCH_MESSAGE_SUCCESS = 'CHAT_FETCH_MESSAGE_SUCCESS';

export const chatSendMessage = (payload) => ({
	type: CHAT_SEND_MESSAGE,
	payload
});

export const chatSendMessageSuccess = () => ({
	type: CHAT_SEND_MESSAGE_SUCCESS
});

export const chatFetchMessage = () => ({
	type: CHAT_FETCH_MESSAGE
});

export const chatFetchMessageSuccess = (list) => ({
	type: CHAT_FETCH_MESSAGE_SUCCESS,
	payload: {
		list
	}
});