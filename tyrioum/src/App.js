import React from 'react';
import './App.css';
//import { Grid, Row, Col } from 'react-bootstrap';
import { Provider } from 'react-redux';
import Generator from './components/generator';
import Quotebox from './components/quotebox';
import Options from './components/options';
import Empty from './components/empty';
import Amount from './components/amount';
import Social from './components/social';
import Store from './store/store';
/*
 *Imports and components
 */
const App = () => {
  return (
		<Provider store={Store}>
			<div className="mainContainer">
				<Amount />
				<Options />
				<Empty />
				<Quotebox />
				<Social />
				<Generator />
			</div>
		</Provider>
  );
}

export default App;