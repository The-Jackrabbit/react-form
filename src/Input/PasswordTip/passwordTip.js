import React, { Component } from 'react';
import './passwordTip.css';
import StatusIcon from '../../../Icons/statusIcon';

class PasswordTip extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		console.log("updating");
	}

	componentWillReceiveProps() {
		console.log("recieving");
	}

	restrictedWordsToMarkup(arr) {
		let markup = [];
		for (let i = 0 ; i < arr.length ; i++) {
			let comma = i < arr.length - 1 ? ", " : "";
			markup.push(
				<span className="italic" key={i} >
					"{arr[i]}"{comma}
				</span>
			)
		}
		return markup;
	}
	
	render() {
		return (
			<div className="password-tip-container grid">
				<div className="bubble-caret">
				
					<svg width="11px" height="24px" viewBox="0 0 11 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
						<g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
							<g id="Desktop" transform="translate(-487.000000, -526.000000)" fill="#FAFCFF">
									<g id="Password-reqs" transform="translate(487.000000, 512.000000)">
										<polygon id="Triangle" points="0 26 11 14 11 38"></polygon>
									</g>
							</g>
						</g>
					</svg>
				</div>
				<div className="bubble">
					{(this.props.isValid && 
					<div className="password-tip-title ok">Password is ok</div>)
					||
					(!this.props.isValid && 
					<div className="password-tip-title">Password Must:</div>
					)}

					{(this.props.reqs.minimumLength && 
					<div className="req-row grid">
						<div className="status-icon">
							<StatusIcon isValid={this.props.passwordProgress.minimumLength}></StatusIcon>
						</div>
						<div className="description">
							{this.props.reqs.minimumLength} characters minimum
						</div>
					</div>
					)}
					{(this.props.reqs.numberOfCapitals && 
					<div className="req-row grid">
						<div className="status-icon">
							<StatusIcon isValid={this.props.passwordProgress.numberOfCapitals}></StatusIcon>
						</div>
						<div className="description">
							Contains at least {this.props.reqs.numberOfCapitals} capital letter
						</div>
					</div>
					)}
					{(this.props.reqs.numberOfNumbers && 
					<div className="req-row grid">
						<div className="status-icon">
							<StatusIcon isValid={this.props.passwordProgress.numberOfNumbers}></StatusIcon>
						</div>
						<div className="description">
							Contains at least {this.props.reqs.numberOfNumbers} number
						</div>
					</div>
					)}
					{(this.props.reqs.numberOfSymbols && 
					<div className="req-row grid">
						<div className="status-icon">
							<StatusIcon isValid={this.props.passwordProgress.numberOfSymbols}></StatusIcon>
						</div>
						<div className="description">
							Contains at least {this.props.reqs.numberOfSymbols} symbol
						</div>
					</div>
					)}
					{(this.props.reqs.noRestrictedWords && 
					<div className="req-row grid">
						<div className="status-icon">
							<StatusIcon isValid={this.props.passwordProgress.noRestrictedWords}></StatusIcon>
						</div>
						<div className="description">
							Can't be <span> {this.restrictedWordsToMarkup(this.props.restrictedWords)} </span>
						</div>
					</div>
					)}

					
				</div>
				
			</div>
			
		);
	}
}

export default PasswordTip;
