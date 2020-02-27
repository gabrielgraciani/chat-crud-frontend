export const USER_SEND = 'USER_SEND';
export const USER_SAVED_SUCCESS = 'USER_SAVED_SUCCESS';
export const USER_FETCH = 'USER_FETCH';
export const USER_FULLFILLED = 'USER_FULLFILLED';
export const USER_DELETE = 'USER_DELETE';
export const USER_SHOW_EDIT = 'USER_SHOW_EDIT';
export const USER_EDIT_FULLFILLED = 'USER_EDIT_FULLFILLED';
export const USER_OPEN_FORM = 'USER_OPEN_FORM';
export const USER_CLOSE_FORM = 'USER_CLOSE_FORM';
export const USER_UPDATE = 'USER_UPDATE';
export const USER_UPDATE_LIST = 'USER_UPDATE_LIST';


export const userSend = (payload) => ({
	type: USER_SEND,
	payload
});

export const userSavedSuccess = (payload) => ({
	type: USER_SAVED_SUCCESS,
	payload
});

export const userFetch = () => ({
	type: USER_FETCH
});

export const userFullFilled = (list, last, endInfiniteScroll) => ({
	type: USER_FULLFILLED,
	payload: {
		list,
		last,
		endInfiniteScroll
	}
});

export const userDelete = (payload) => ({
	type: USER_DELETE,
	payload
});

export const userShowEdit = (payload) => ({
	type: USER_SHOW_EDIT,
	payload
});

export const userEditFullFilled = (payload) => ({
	type: USER_EDIT_FULLFILLED,
	payload: {
		payload
	}
});

export const userOpenForm = () => ({
	type: USER_OPEN_FORM
});

export const userCloseForm = () => ({
	type: USER_CLOSE_FORM,
	payload: {}
});

export const userUpdate = (payload) => ({
	type: USER_UPDATE,
	payload
});

export const userUpdateList = (list) => ({
	type: USER_UPDATE_LIST,
	payload: {
		list
	}
});