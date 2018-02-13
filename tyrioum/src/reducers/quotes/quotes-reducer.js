const initialState = {
	quote: 'The Gods give with one hand and take with the other.',
	numberOfQuotes: 1,
	pTagState: false,
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

		default:
			return state;
	}
}

export default quotes;