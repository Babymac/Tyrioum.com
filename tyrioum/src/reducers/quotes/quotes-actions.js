export const GENERATING_QUOTE = 'GENERATING_QUOTE'
export const CHANGE_P_TAG_STATE = 'CHANGE_P_TAG_STATE'
export const CHANGE_H_TAG_STATE = 'CHANGE_H_TAG_STATE'
export const REMOVE_QUOTES = 'REMOVE_QUOTES'
export const CHANGE_QUOTE_AMOUNT = 'CHANGE_QUOTE_AMOUNT'

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

export function changeHTagState () {
	return {
		type: CHANGE_H_TAG_STATE,
	};
};

export function removeQuote () {
	return {
		type: REMOVE_QUOTES,
	};
};

export function changeQuoteAmount (amount) {
	return {
		type: CHANGE_QUOTE_AMOUNT,
		data: amount,
	};
};