import React from 'react';
import './errorMessage.css';
import PropTypes from 'prop-types';

let propTypes = {
	isVisible: PropTypes.bool,
	errorMessage: PropTypes.string
};

const ErrorMessage = ({isVisible, errorMessage}) => {
	if (isVisible) {
		return (
			<div className='error'>
				<p>{errorMessage}</p>
			</div>
		);
	}
	return (null);
};

ErrorMessage.propTypes = propTypes;
export default ErrorMessage;