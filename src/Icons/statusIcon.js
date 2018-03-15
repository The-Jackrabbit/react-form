import React, { Component } from 'react';
import {ValidIcon, ErrorIcon} from './icons';

let defaultStatusIconProps = {
	"fill": "#ffffff",
	"height": "18pt",
	"width": "18pt"
};

const StatusIcon = ({isValid, height, width}) => {
	if (isValid) {
		return (<ValidIcon height={height} width={width}></ValidIcon>);
	}
	return(<ErrorIcon height={height} width={width}></ErrorIcon>);
}

StatusIcon.defaultProps = defaultStatusIconProps;

export default StatusIcon;