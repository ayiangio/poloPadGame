const initialState = {
	userList: [],
	isLoading: false,
	isFulfilled: false,
	isRejected: false,
	token:''
};

const user = (state = initialState, action) => {
	switch (action.type) {
		case 'LOGIN_PENDING':
			return {
				...state,
				isLoading: true,
				isFulfilled: false,
				isRejected: false
			};
		case 'LOGIN_REJECTED':
			return {
				...state,
				isLoading: false,
				isRejected: true
			};
		case 'LOGIN_FULFILLED':
			// state.userList.push(action.payload.data);
			return {
				...state,
				isLoading: false,
				isFulfilled: true,
				userList: action.payload.data.result
			};
		case 'GET_USER_PENDING':
			return {
				...state,
				isLoading: true,
				isFulfilled: false,
				isRejected: false
			};
		case 'GET_USER_REJECTED':
			return {
				...state,
				isLoading: false,
				isRejected: true
			};
		case 'GET_USER_FULFILLED':
			// state.userList.push(action.payload.data);
			return {
				...state,
				isLoading: false,
				isFulfilled: true,
				userList: action.payload.data.result
			};
		default:
			return state;
	}
};

export default user;
