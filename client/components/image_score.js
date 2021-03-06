// Import React 
import React from 'react';

// Create our component
const ImageScore = (props) => {
	// props.ups is number of ipvotes
	// props.downs is number of downvotes
	
	const { ups, downs } = props;

	const upsPercent = `${100 * (ups / (ups + downs))}%`;
	const downsPercent = `${100 * (downs / (ups + downs))}%`;

	return (
		<div>
			Ups/Downs
			<div className="progress"> 
				<div style={{width: upsPercent}} className="progress-bar progress-bar-success progress-bar-striped"> </div>
				<div style={{width: downsPercent}} className="progress-bar progress-bar-danger progress-bar-striped"> </div>
			</div>
		</div>
	);
};

// Export our component
export default ImageScore;