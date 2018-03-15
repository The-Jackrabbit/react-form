import React, { Component } from "react";

import Input from "./Input/input";
import Submit from "./Submit/submit";
import "./form.css";
export class Form extends Component {
	constructor(props) {
		super(props);

		this.state = {
			"inputValidity": {},
			"passwordReqs": {
				"numberOfCapitals": 1,
				"numberOfSymbols": 1,
				"numberOfNumbers": 1,
				"minimumLength": 8,
				"noRestrictedWords": true,
				"passwordsMatch": true
			},
			"restrictedWords": ["password", "user", "username"]
		};
		this.handleFormInput = this.handleFormInput.bind(this);
		this.checkPasswordsMatch = this.checkPasswordsMatch.bind(this);
		this.validateSubmit = this.validateSubmit.bind(this);
	}

	handleFormInput(event, isValid, context) {
		this.setState({
			[context]: event.target.value,
			"inputValidity": {
				...this.state.inputValidity,
				[context]: isValid
			}
		});
		if (context === "password") {
			this.checkPasswordsMatch(event.target.value, this.state.passwordConfirm);
		}
		else if (context === "passwordConfirm") {
			this.checkPasswordsMatch(this.state.password, event.target.value);
		}
	}
	
	validateEmail(event) {
		// regex from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(event);
	}

	checkPasswordsMatch(password, confirm) {
		let validMatch = (confirm != undefined)&&(password == confirm);
		this.setState({
			"passwordReqs": {
				...this.state.passwordReqs,
				"passwordsMatch": validMatch
			}
		});
		return validMatch;
	}

	validateSubmit(event) {
		console.log("submitting");
		const andAllReducer = (previous, currentTest) => previous&currentTest;
		let isSubmittable = Object.values(this.state.inputValidity).reduce(andAllReducer, this.state.inputValidity.length > 0);
		if (isSubmittable) {
			alert("you're good to go boss!");
		} else {
			alert("you fucked up kid!");
		}
	}

	validateUsername(value) {
		return value.length > 0;
	}

	

	render() {
		return (
			<div className="form-inputs">
				<Input 
					context="email"
					name="Email address"
					invalidText="Email is invalid"
					emptyText="Email can't be empty"
					validator={this.validateEmail}
					onChange={this.handleFormInput}
				>
				</Input>
				<Input 
					context="username"
					name="Username"
					invalidText="Username is invalid"
					emptyText="Username can't be empty"
					validator={this.validateUsername}
					onChange={this.handleFormInput}
				>
				</Input>
				<Input 
					inputType="password"
					context="password"
					name="Password"
					invalidText="Password is invalid"
					emptyText="Password can't be empty"
					onChange={this.handleFormInput}
					reqs={this.state.passwordReqs}
					restrictedWords={this.state.restrictedWords}
				>
				</Input>
				<Input 
					inputType="password"
					context="passwordConfirm"
					name="Confirm Password"
					invalidText="Passwords don't match"
					emptyText="Please confirm your password"
					isValid={this.state.passwordReqs.passwordsMatch}
					validator={this.checkPasswordsMatch}
					onChange={this.handleFormInput}
				>
				</Input>

				<Submit value="CREATE ACCOUNT"
					onClick={this.validateSubmit}></Submit>

				<input type="file"/>

				<p>email: {this.state.email}</p>
				{
					this.state.inputValidity.email && <p>email is valid</p>
				}
				<p>username: {this.state.username}</p>
				{
					this.state.inputValidity.username && <p>username is valid</p>
				}
				<p>password: {this.state.password}</p>
				{
					this.state.inputValidity.password && <p>password is valid</p>
				}
				<p>state: {this.state.state}</p>


			</div>
		
		);
	}
}

export default Form;