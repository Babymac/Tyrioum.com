export const GENERATING_QUOTE = 'GENERATING_QUOTE'
export const CHANGE_P_TAG_STATE = 'CHANGE_P_TAG_STATE'

export function generatingQuote (quote) {
	return {
		type: GENERATING_QUOTE,
		data: quote,
	};
};

export function changePTagState () {
	return {
		type: CHANGE_P_TAG_STATE,
	};
};