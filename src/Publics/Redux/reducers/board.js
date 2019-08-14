const initialState = {
	scoreList: [],
	isLoading: false,
	isFulfilled: false,
	isRejected: false,
	listId : []
};

const score = (state = initialState, action) => {
	switch (action.type) {		
		case 'GET_SCORE_PENDING':
			return {
				...state,
				isLoading: true,
				isFulfilled: false,
				isRejected: false
			};
		case 'GET_SCORE_REJECTED':
			return {
				...state,
				isLoading: false,
				isRejected: true
			};
		case 'GET_SCORE_FULFILLED':
			// state.userList.push(action.payload.data);
			return {
				...state,
				isLoading: false,
				isFulfilled: true,
				scoreList: action.payload.data.result
			};
			case 'GET_SCORE_ID_PENDING':
				return {
					...state,
					isLoading: true,
					isFulfilled: false,
					isRejected: false
				};
			case 'GET_SCORE_ID_REJECTED':
				return {
					...state,
					isLoading: false,
					isRejected: true
				};
			case 'GET_SCORE_ID_FULFILLED':
				// state.userList.push(action.payload.data);
				return {
					...state,
					isLoading: false,
					isFulfilled: true,
					listId: action.payload.data.result
				};
		default:
			return state;
	}
};

export default score;
