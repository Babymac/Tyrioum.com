import React from 'react';
import Marker from '../marker';
import GoogleMapReact from 'google-map-react';
//---------------------------------------
// Imports and constants
//---------------------------------------

const Google = props => {
	const {
		markersManagement,
		fetchMarkersPositions,
	} = props;
	return (
		<div className="mapSize">
			<GoogleMapReact
			  defaultCenter={{lat: 55.605664, lng: 13.000267}}
        defaultZoom={17}
      >
      	{markersManagement.position.map((pos, i) => {
      		return <Marker key={i} lat={pos.lat} lng={pos.lng}/>
      	})}
      </GoogleMapReact>
      <button onClick={fetchMarkersPositions}>Fetch</button>
		</div>
	);
};

export default Google;