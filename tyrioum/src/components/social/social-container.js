import {
	compose,
	// lifecycle,
	// withHandlers,
	// withStateHandlers,
} from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import {  } from '../../reducers/quotes/quotes-actions';

import Social from './social';
//---------------------------------------
// Imports and constants
//---------------------------------------

function mapStateToProps(state) {
	const { quotes } = state;
	return { quotes };
}

function mapDispatchToProps(dispatch) {
	const actions = bindActionCreators({  }, dispatch);
	return {actions};
}

const SocialContainer = compose(
	connect(mapStateToProps, mapDispatchToProps),
)(Social);

export default SocialContainer;