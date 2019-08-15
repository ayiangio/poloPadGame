import { AsyncStorage } from 'react-native'
const initialState = {
	userList: [],
	isLoading: false,
	isFulfilled: false,
	isRejected: false,
	token: '',
	login: null
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
			const idUser = action.payload.data.result.idUser.toString()
			const fullName = action.payload.data.result.fullName
			const token = action.payload.data.result.token
			const email = action.payload.data.result.email
			AsyncStorage.setItem('idUser', idUser)
			AsyncStorage.setItem('jwtToken', token)
			AsyncStorage.setItem('fullName', fullName)
			AsyncStorage.setItem('email', email)
			return {
				...state,
				isLoading: false,
				isFulfilled: true,
				login: [state.login, action.payload]
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
