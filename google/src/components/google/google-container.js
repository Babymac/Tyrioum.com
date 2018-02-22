import {
	compose,
	// lifecycle,
	withHandlers,
	// withStateHandlers,
} from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { fetchPositions } from '../../reducers/markers/markers-actions';

import Google from './google';
//---------------------------------------
// Imports and constants
//---------------------------------------

function mapStateToProps(state) {
	const { markersManagement } = state;
	return { markersManagement };
}

function mapDispatchToProps(dispatch) {
	const actions = bindActionCreators({ fetchPositions }, dispatch);
	return {actions};
}

const GoogleContainer = compose(
	connect(mapStateToProps, mapDispatchToProps),
	withHandlers({
		fetchMarkersPositions: props => () => {
			console.log('fetching')
			props.actions.fetchPositions();
		},
	}),
)(Google);

export default GoogleContainer;