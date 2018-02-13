import React from 'react';
import './App.css';
//import { Grid, Row, Col } from 'react-bootstrap';
import { Provider } from 'react-redux';
import Generator from './components/generator';
import Quotebox from './components/quotebox';
import Options from './components/options';
import Store from './store/store';
/*
 *Imports and components
 */
const App = () => {
  return (
		<Provider store={Store}>
			<div className="mainContainer">
				<Options />
				<Quotebox />
				<Generator />
			</div>
		</Provider>
  );
}

export default App;