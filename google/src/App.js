import React from 'react';
import './App.css';
//import { Grid, Row, Col } from 'react-bootstrap';
import { Provider } from 'react-redux';
import Google from './components/google';
import Store from './store/store';
/*
 *Imports and components
 */
const App = () => {
  return (
		<Provider store={Store}>
			<div className="mainContainer">
				<Google/>
			</div>
		</Provider>
  );
}

export default App;