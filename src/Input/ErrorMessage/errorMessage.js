import React, { Component } from "react";
import "./errorMessage.css";
import PropTypes from "prop-types";


const ErrorMessage = ({isVisible, errorMessage}) => {
	if (isVisible) {
		return (
			<div className="error">
				<p>{errorMessage}</p>
			</div>
		);
	}
	return (null);
};

ErrorMessage.propTypes = {
	"isVisible": PropTypes.bool,
	"errorMessage": PropTypes.string
};

export default ErrorMessage;