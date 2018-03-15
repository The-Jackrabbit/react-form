import React, {Component} from "react";
import PropTypes from "prop-types";
import "./input.css";
import PasswordTip from "./PasswordTip/passwordTip";
import StatusIcon from "../../Icons/statusIcon";
import ErrorMessage from "./ErrorMessage/errorMessage";
/*

Password needs 
1) to update itself
2) send out update to form 

Form needs:
1) take in input data
2) update passwordConfirm 

*/
class Input extends Component {
	constructor(props) {
		super(props);

		this.state = {
			"value": null
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleFocus = this.handleFocus.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
		this.checkPassword = this.checkPassword.bind(this);
	}

	componentWillMount() {
		let newStateVars = {
			"placeholder": this.props.name,
			"value": this.props.value,
			"isEmpty": this.props.value.length === 0,
			"touched": false,
			"labelIsVisible": false
		};
		if (this.props.context === "password") {
			newStateVars["passwordProgress"] =  {};
		}
		if (this.props.isValid) {
			newStateVars["isValid"] = this.props.isValid;
		}
		this.setState({
			...newStateVars
		});
	}

	componentWillReceiveProps(nextProps){
		console.log("updating props for" + this.props.context);
		console.log(`"showErrorMessage" for ${this.props.context}: ${this.state.touched && !nextProps.isValid}`);
		if ("isValid" in nextProps) {
			console.log(`"this.state.touched " for ${this.props.context}: ${this.state.touched}`);
			console.log(`"!nextProps.isValid" for ${this.props.context}: ${!nextProps.isValid}`);
			this.setState({
				"isValid": nextProps.isValid,
				"showErrorMessage": (this.state.touched || this.state.engaged) && !nextProps.isValid,
			});
		}
	}

	checkPassword(value) {
		let countCapitals = value.replace(/[^A-Z]/g, "").length;
		let countNumbers = value.replace(/[^0-9]/g, "").length;
		let countSymbols = value.replace(/[^&%$#@!?]/g, "").length;
		let isValid = true;
		let tests = {};

		if (this.props.reqs.numberOfCapitals) {
			tests["numberOfCapitals"] = this.props.reqs.numberOfCapitals <= countCapitals;
		}
		if (this.props.reqs.numberOfNumbers) {
			tests["numberOfNumbers"] = this.props.reqs.numberOfNumbers <= countNumbers; 
		}
		if (this.props.reqs.numberOfSymbols) {
			tests["numberOfSymbols"] = this.props.reqs.numberOfSymbols <= countSymbols; 
		}
		if (this.props.reqs.minimumLength) {
			tests["minimumLength"] = this.props.reqs.minimumLength <= value.length; 
		}
		if (this.props.reqs.noRestrictedWords) {
			tests["noRestrictedWords"] = !this.props.restrictedWords.includes(value); 
		}

		this.setState({
			"passwordProgress": tests
		});

		const andAllReducer = (previous, currentTest) => previous&currentTest;
		isValid = Object.values(tests).reduce(andAllReducer, isValid);

		return isValid;
	}

	handleChange(event) {
		console.log("handling change for" + this.props.context);
		let newValidity = event.target.value.length > 0;
		if (this.props.context === "password") {
			newValidity = newValidity&&this.checkPassword(event.target.value);
		}
		else if (this.props.validator) {
			newValidity = newValidity&&this.props.validator(event.target.value);
		}

		let updatedValues = {
			"value": event.target.value,
			"isEmpty": event.target.value.length < 1,
			"touched": true,
			"isValid": newValidity,
			"showErrorMessage": !newValidity,
			"errorMessage": this.props.invalidText
		};
		console.log(`"showErrorMessage" for ${this.props.context}: ${!newValidity}`);
		if (event.target.value.length < 1) {
			updatedValues["errorMessage"] = this.props.emptyText;
		}

		this.setState({
			...updatedValues
		});

		// call onChange method on the parent component for updating it's state
		if(this.props.onChange) {
			this.props.onChange(event, newValidity, this.props.context);
		}
	}
	
	handleFocus() {
		this.setState({
			"focus": true,
			"placeholder": "",
			"labelIsVisible": true,
			"engaged": true
		});
	}
	handleBlur() {
		this.setState({
			"focus": false,
			"placeholder": this.props.name,
			"labelIsVisible": !this.state.isEmpty,
			
		});
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (this.props.context === "email") {
			return this.nextState.value !== this.state.value;
		}
		return false;
	}
	
	render() {
		return (
			<div>
				<div className="input grid">
					<div className="input-container grid">
						<div className="input-area">
							{this.state.labelIsVisible && 
								<label className="input-label" htmlFor={this.props.name}>
									<span className="label-text">{this.props.name}</span>
								</label>
							}
							<input 
								type={this.props.inputType}
								id={this.props.name}
								value={this.state.value} 
								placeholder={this.state.placeholder}
								onChange={this.handleChange}
								onFocus={this.handleFocus}
								onBlur={this.handleBlur}
							/>
							
						</div>
						<div className="status-icon-area">
							{this.state.touched &&
							<StatusIcon 
								isValid={this.state.isValid}
								height="18pt"
								width="18pt"
							></StatusIcon>}
						</div>
						
					</div>
					<div className="errorMessage">
						
						{ (this.state.focus && this.props.context === "password" && 
							<div className="password-tip-container">
								<PasswordTip
									reqs={this.props.reqs}
									passwordProgress={this.state.passwordProgress}
									isValid={this.state.isValid}
									restrictedWords={this.props.restrictedWords}
									noRestrictedWords={this.state.noRestrictedWords}
								></PasswordTip>
							</div>
						)
							||
							<ErrorMessage
								isVisible={this.state.showErrorMessage}
								errorMessage={this.state.errorMessage}>
							</ErrorMessage>
						}
					</div>
				</div>
				
			</div>
			
			
		);
	}
}

Input.propTypes = {
	"name": PropTypes.string.isRequired,
	"context": PropTypes.string.isRequired,
	"onChange": PropTypes.func.isRequired,
	"invalidText": PropTypes.string.isRequired,
	"emptyText": PropTypes.string.isRequired,
	"validator": PropTypes.func,
	"isValid": PropTypes.bool,
	"inputType": PropTypes.string,
	"defaultValue": PropTypes.string,
	"value": PropTypes.string,

	// for passwords
	"reqs": PropTypes.object,
	"restrictedWords": PropTypes.array,	
};
const defaultInputProps = {
	"inputType": "text",
	"defaultValue": "",
	"value": "",
};

Input.defaultProps = defaultInputProps;

export default Input;
