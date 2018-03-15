import React from 'react';
import PropTypes from 'prop-types';
import './select.css';

/*
onChange
values
selectedValue
context
name
defaultValue
*/

let propTypes = {
	name: PropTypes.string,
	context: PropTypes.string,
	values: PropTypes.array,
	selectedValue: PropTypes.string,
	defaultValue: PropTypes.string,
	onChange: PropTypes.func,
	id: PropTypes.string
};

let defaultProps = {
	values: [],
};

const Select = ({name, context, values, selectedValue, defaultValue, onChange, id}) => {
	let options = [];
	for (let i = 0 ; i < values.length ; i++) {
		options.push(
			<option value={values[i].value}>{values[i].text}</option>
		);
	}

	return (
		<div style={{
			padding: '8pt'
		}}>
			<select name={name} id={id} onChange={onChange}
				style={{
					height: '50pt',
					border: 'none',
					backgroundColor: 'white',
					width: '320pt',
					fontSize: '14pt',
					color: '#9b9b9b',
					fontWeight: '250'
				}}>
				{options}
			</select>
		</div>
	);
};

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;

export default Select;