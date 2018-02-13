import {
	compose,
	// lifecycle,
	withHandlers,
	// withStateHandlers,
} from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { generatingQuote } from '../../reducers/quotes/quotes-actions';
import quotes_object from '../../quotes/quotes';
import Generator from './generator';
//---------------------------------------
// Imports and constants
//---------------------------------------

function mapStateToProps(state) {
	const { quotes } = state;
	return { quotes };
}

function mapDispatchToProps(dispatch) {
	const actions = bindActionCreators({ generatingQuote }, dispatch);
	return {actions};
}

const GeneratorContainer = compose(
	connect(mapStateToProps, mapDispatchToProps),
	withHandlers({
		generateQuote: props => (e) => {
			e.preventDefault();
			const quotenumber = Math.floor(Math.random() * 20) + 1;

			const Quote = quotes_object.find((i) => {
				return i.item_number === quotenumber;
			});

			const {
				quote,
			} = Quote;

			props.actions.generatingQuote(quote);
		},
	}),
)(Generator);

export default GeneratorContainer;