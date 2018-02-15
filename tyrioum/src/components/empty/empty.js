import React from 'react';

//---------------------------------------
// Imports and constants
//---------------------------------------

const Empty = props => {
	const {
		quotes,
		removeQuote,
	} = props;

	return (
		<div>
			<label className="optionsLabel">Valar Morghulis.</label>
			<button
				onClick={removeQuote}
				className="emptyButton"
			>{'Remove'}</button>
		</div>
	);
};

export default Empty;