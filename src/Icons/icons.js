import React from 'react';
import PropTypes from 'prop-types';

let propTypes = {
	height: PropTypes.string, 
	width: PropTypes.string, 
	stroke: PropTypes.string
};

let defaultValidIconProps = {
	stroke: '#5EFC69'
};
let defaultErrorIconProps = {
	stroke: '#FF656B'
};

const ErrorIcon = ({height, width, stroke}) => {
	return (
		<svg width={width} height={height} viewBox='0 0 27 27' version='1.1' xmlns='http://www.w3.org/2000/svg' xlink='http://www.w3.org/1999/xlink'>
			<g id='Page-1' stroke='none' strokeWidth='1' fill='#FFFFFF' fillRule='evenodd'>
				<g id='Desktop' transform='translate(-440.000000, -249.000000)' stroke={stroke}>
					<g id='invalid---not-empty' transform='translate(83.000000, 232.000000)'>
						<g id='Input'>
							<g id='Invalid' transform='translate(358.000000, 18.000000)'>
								<circle id='Oval' cx='12.5' cy='12.5' r='12.5'></circle>
								<g id='Group' transform='translate(6.250000, 6.250000)'>
									<path d='M12.5,0 L0,12.5' id='Path-3'></path>
									<path d='M0,0 L12.5,12.5' id='Path-2'></path>
								</g>
							</g>
						</g>
					</g>
				</g>
			</g>
		</svg>
	);
};
const ValidIcon = ({height, width, stroke}) => {
	return (
		<svg width={width} height={height} viewBox='0 0 27 27' version='1.1' xmlns='http://www.w3.org/2000/svg' xlink='http://www.w3.org/1999/xlink'>
			<g id='Page-1' stroke='none' strokeWidth='1' fill='#FFFFFF' fillRule='evenodd'>
				<g id='Desktop' transform='translate(-440.000000, -159.000000)' stroke={stroke}>
					<g id='valid' transform='translate(83.000000, 142.000000)'>
						<g id='validicon' transform='translate(358.000000, 18.000000)'>
							<circle id='Oval' cx='12.5' cy='12.5' r='12.5'></circle>
							<g id='Group' transform='translate(6.250000, 6.250000)'>
								<polyline id='Path-4' points='0 6.25 6.25 12.5 12.5 0'></polyline>
							</g>
						</g>
					</g>
				</g>
			</g>
		</svg>
	);
};

ValidIcon.propTypes = propTypes;
ErrorIcon.propTypes = propTypes;
ValidIcon.defaultProps = defaultValidIconProps;
ErrorIcon.defaultProps = defaultErrorIconProps;

export {ValidIcon, ErrorIcon};


