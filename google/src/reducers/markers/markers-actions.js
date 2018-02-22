export const FETCH_POSITIONS = 'FETCH_POSITIONS'

export function fetchPositions (quote) {
  return { 
		type: FETCH_POSITIONS,
		payload: {
			request: {
				method: 'GET',
				url: "url",
			}
		}
  };
};
