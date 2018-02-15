import React from 'react';

//---------------------------------------
// Imports and constants
//---------------------------------------

const Quotebox = props => {
	let tagOpen = '';
	let tagClose = '';

	const {
		quotes,
	} = props;

	const func = () => {
	};

	if (quotes.pTagState){
		tagOpen = '<p>'
		tagClose = '</p>'
	}

	return (
		<div>
			<textarea className="quotebox" onChange={func} value={
`${tagOpen}
${quotes.quote}
${tagClose}

`
			}>
			</textarea>
		</div>
	);
};

export default Quotebox;