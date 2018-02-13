import React from 'react';

//---------------------------------------
// Imports and constants
//---------------------------------------

const Generator = props => {
	const {
		generateQuote,
	} = props;

	return (
		<div className="generatorContainer">
			<p className="generatorHeader">The Gods give with one hand<br/> and take with the other.</p>
			<button onClick={generateQuote} className="generatorButton">Generate Quote</button>
		</div>
	);
};

export default Generator;