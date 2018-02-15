import {
	compose,
	// lifecycle,
	withHandlers,
	// withStateHandlers,
} from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { changeQuoteAmount } from '../../reducers/quotes/quotes-actions';

import Amount from './amount';
//---------------------------------------
// Imports and constants
//---------------------------------------

function mapStateToProps(state) {
	const { quotes } = state;
	return { quotes };
}

function mapDispatchToProps(dispatch) {
	const actions = bindActionCreators({ changeQuoteAmount }, dispatch);
	return {actions};
}

const AmountContainer = compose(
	connect(mapStateToProps, mapDispatchToProps),
	withHandlers({
		quoteAmount: props => (e) => {
			e.preventDefault();
			console.log(e)
			props.actions.changeQuoteAmount();
		},
	}),
)(Amount);

export default AmountContainer;