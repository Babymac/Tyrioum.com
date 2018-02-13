import React from 'react';

//---------------------------------------
// Imports and constants
//---------------------------------------

const Quotebox = props => {
	const {
		quotes,
	} = props;

	const func = () => {
	};

	return (
		<div>
			<textarea className="quotebox" onChange={func} value={
`<!-- start Tyrioum code -->

${quotes.quote}

<!-- end Tyrioum code -->`}>
			</textarea>
		</div>
	);
};

export default Quotebox;