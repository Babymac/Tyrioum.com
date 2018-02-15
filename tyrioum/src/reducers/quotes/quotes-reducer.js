const initialState = {
	quote: 'The Gods give with one hand and take with the other.',
	numberOfQuotes: 1,
	pTagState: false,
	hTagState: false,
};

const quotes = (state = initialState, action) => {

	switch (action.type) {

		case 'GENERATING_QUOTE':
			return {
				...state,
				quote: action.data,
			};

		case 'CHANGE_P_TAG_STATE':
			return {
				...state,
				pTagState: !state.pTagState
			};

		case 'CHANGE_H_TAG_STATE':
			return {
				...state,
				hTagState: !state.hTagState
			};

		case 'REMOVE_QUOTES':
			return {
				...state,
				quote: '',
				pTagState: false,
				hTagState: false,
			};

		case 'CHANGE_QUOTE_AMOUNT':
			return {
				...state,
				numberOfQuotes: action.data,
			};

		default:
			return state;
	}
}

export default quotes;