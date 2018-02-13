import React from 'react';

//---------------------------------------
// Imports and constants
//---------------------------------------

const Options = props => {
	let buttonStyle;
	const label = `P tag?`;
	const {
		quotes,
		addPTags,
	} = props;

	quotes.pTagState ? buttonStyle = 'optionsActive' : buttonStyle = 'optionsInactive';

	return (
		<div>
			<button
				onClick={addPTags}
				className={buttonStyle}
			>{label}</button>
		</div>
	);
};

export default Options;