import React from 'react';

//---------------------------------------
// Imports and constants
//---------------------------------------

const Options = props => {
	let buttonPStyle;
	let buttonHStyle;

	const {
		quotes,
		addPTags,
		addHTags,
	} = props;

	quotes.pTagState ? buttonPStyle = 'optionsPActive' : buttonPStyle = 'optionsPInactive';
	quotes.hTagState ? buttonHStyle = 'optionsHActive' : buttonHStyle = 'optionsHInactive';

	return (
		<div>
			<label className="optionsLabel">Add a paragraph tag?</label>
			<button
				onClick={addPTags}
				className={buttonPStyle}
			>{'P tag?'}</button>
{/*			<button
				onClick={addHTags}
				className={buttonHStyle}
			>{'H tag?'}</button>*/}
		</div>
	);
};

export default Options;