import {
	compose,
	// lifecycle,
	// withHandlers,
	// withStateHandlers,
} from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
//import {  } from '../../reducers/quotes/quotes-actions';

import Marker from './marker';
//---------------------------------------
// Imports and constants
//---------------------------------------

function mapStateToProps(state) {
	const { markersManagement } = state;
	return { markersManagement };
}

function mapDispatchToProps(dispatch) {
	const actions = bindActionCreators({  }, dispatch);
	return {actions};
}

const MarkerContainer = compose(
	connect(mapStateToProps, mapDispatchToProps),
	// withHandlers({
	// 	quoteMarker: props => (e) => {
	// 		e.preventDefault();
	// 		console.log(e)
	// 		props.actions.changeQuoteMarker();
	// 	},
	// }),
)(Marker);

export default MarkerContainer;