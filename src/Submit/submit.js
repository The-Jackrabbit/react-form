import React, { Component } from "react";
import "./submit.css";
import PropTypes from "prop-types";
let defaultSubmitProps = {
	"value": "Submit"
};

const Submit = ({value, onClick}) => {
	return (
		<div className="input grid">
			<button onClick={onClick}>{value}</button>
		</div>
	);
};
Submit.propTypes = {
	"value": PropTypes.string,
	"onClick": PropTypes.func
};
Submit.defaultProps = Submit;

export default Submit;
