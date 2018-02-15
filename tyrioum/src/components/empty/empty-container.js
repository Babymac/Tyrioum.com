import {
	compose,
	// lifecycle,
	withHandlers,
	// withStateHandlers,
} from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { removeQuote } from '../../reducers/quotes/quotes-actions';

import Empty from './empty';
//---------------------------------------
// Imports and constants
//---------------------------------------

function mapStateToProps(state) {
	const { quotes } = state;
	return { quotes };
}

function mapDispatchToProps(dispatch) {
	const actions = bindActionCreators({ removeQuote }, dispatch);
	return {actions};
}

const EmptyContainer = compose(
	connect(mapStateToProps, mapDispatchToProps),
	withHandlers({
		removeQuote: props => (e) => {
			e.preventDefault();
			props.actions.removeQuote();
		},
	}),
)(Empty);

export default EmptyContainer;