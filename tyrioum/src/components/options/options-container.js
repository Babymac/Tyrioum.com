import {
	compose,
	// lifecycle,
	withHandlers,
	// withStateHandlers,
} from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { changePTagState, changeHTagState } from '../../reducers/quotes/quotes-actions';

import Options from './options';
//---------------------------------------
// Imports and constants
//---------------------------------------

function mapStateToProps(state) {
	const { quotes } = state;
	return { quotes };
}

function mapDispatchToProps(dispatch) {
	const actions = bindActionCreators({ changePTagState, changeHTagState }, dispatch);
	return {actions};
}

const OptionsContainer = compose(
	connect(mapStateToProps, mapDispatchToProps),
	withHandlers({
		addPTags: props => (e) => {
			e.preventDefault();
			if (!props.quotes.quote) return; 
			props.actions.changePTagState();
		},
		addHTags: props => (e) => {
			e.preventDefault();
			props.actions.changeHTagState();
		},
	}),
)(Options);

export default OptionsContainer;