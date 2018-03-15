import React from 'react';
import {ValidIcon, ErrorIcon} from './icons';
import PropTypes from 'prop-types';

let defaultStatusIconProps = {
	fill: '#ffffff',
	height: '18pt',
	width: '18pt'
};

let propTypes = {
	isValid: PropTypes.bool.isRequired,
	height: PropTypes.string,
	width: PropTypes.string
};

const StatusIcon = ({isValid, height, width}) => {
	if (isValid) {
		return (<ValidIcon height={height} width={width}></ValidIcon>);
	}
	return(<ErrorIcon height={height} width={width}></ErrorIcon>);
};

StatusIcon.defaultProps = defaultStatusIconProps;
StatusIcon.propTypes = propTypes;

export default StatusIcon;