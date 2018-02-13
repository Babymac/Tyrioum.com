import { createStore } from 'redux';
import RootReducer from '../reducers/root-reducer';

/*	baseUrl: 'http://192.168.1.198:8080',
	responseType: 'json'
});*/

const configureStore = () => {
	return createStore (
		RootReducer,
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
		//applyMiddleware(axiosMiddleware(client))
	)
}

const store = configureStore();

export default store;