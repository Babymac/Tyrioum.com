import React from 'react';

//---------------------------------------
// Imports and constants
//---------------------------------------

const Amount = props => {
	const {
		quotes,
		quoteAmount,
	} = props;

	return (
		<div>
			<label className="optionsLabel">
				How many Dornishmen does it take to fuck a goat?
			</label>
			<input className="amountInput" type="number" onChange={quoteAmount} value={quotes.numberOfQuotes}/>
		</div>
	);
};

export default Amount;