const initialState = {
	position: [
		{lat: 55.605664, lng: 13.000267},
		{lat:55.606183, lng: 13.001382},
		{lat:55.606685, lng: 13.000373},
		{lat:55.606279, lng: 12.999064},
	],
};

const markersManagement = (state = initialState, action) => {

	switch (action.type) {

		case 'FETCH_POSITIONS_SUCCESS':
			console.log(action.payload.data, 'data');
			return {
				...state,
				
			};

		default:
			return state;
	}
}

export default markersManagement;