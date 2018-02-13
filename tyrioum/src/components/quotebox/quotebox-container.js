import {
	compose,
	// lifecycle,
	// withHandlers,
	// withStateHandlers,
} from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import {  } from '../../reducers/quotes/quotes-actions';

import Quotebox from './quotebox';
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

const QuoteboxContainer = compose(
	connect(mapStateToProps, mapDispatchToProps),
	// withHandlers({
	// 	generateQuote: props => (e) => {
	// 		e.preventDefault();
	// 		props.actions.generatingQuote();
	// 	},
	// }),
)(Quotebox);

export default QuoteboxContainer;