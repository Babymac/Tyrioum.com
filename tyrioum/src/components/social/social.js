import React from 'react';
import {
	FacebookShareButton,
	LinkedinShareButton,
	TwitterShareButton,
	FacebookIcon,
	LinkedinIcon,
	TwitterIcon,
} from 'react-share';
//---------------------------------------
// Imports and constants
//---------------------------------------

const Social = props => {
	const {
		quotes,
	} = props;
	const url = 'https://www.tyrioum.com';
	return (
		<div className="socialLabel">
			<label >
				Your loyalty to your captors is touching.
			</label>
			<div className="socialButton">
				<FacebookShareButton className="eachButton" url={url}>
					<FacebookIcon round size={40}/>
				</FacebookShareButton>

				<LinkedinShareButton className="eachButton" url={url}>
					<LinkedinIcon round size={40}/>
				</LinkedinShareButton>

				<TwitterShareButton className="eachButton" url={url}>
					<TwitterIcon round size={40}/>
				</TwitterShareButton>
			</div>
		</div>
	);
};

export default Social;