import React from 'react';
import './passwordTip.css';
import StatusIcon from '../../Icons/statusIcon';
import PropTypes from 'prop-types';

let propTypes = {
	isValid: PropTypes.bool.isRequired,
	passwordProgress: PropTypes.object.isRequired,
	reqs: PropTypes.object.isRequired,
	restrictedWords: PropTypes.array
};

const PasswordTip = ({isValid, passwordProgress, reqs, restrictedWords}) => {

	let restrictedWordsToMarkup = (arr) => {
		let markup = [];
		for (let i = 0 ; i < arr.length ; i++) {
			let comma = i < arr.length - 1 ? ', ' : '';
			markup.push(
				<span className='italic' key={i} >
					{`'${arr[i]}'${comma} `}
				</span>
			);
		}
		return markup;
	};

	return (
		<div className='password-tip-container grid'>
			<div className='bubble-caret'>
				<svg width='11px' height='24px' viewBox='0 0 11 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xlink='http://www.w3.org/1999/xlink'>
					<g id='Page-1' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
						<g id='Desktop' transform='translate(-487.000000, -526.000000)' fill='#FAFCFF'>
							<g id='Password-reqs' transform='translate(487.000000, 512.000000)'>
								<polygon id='Triangle' points='0 26 11 14 11 38'></polygon>
							</g>
						</g>
					</g>
				</svg>
			</div>
			<div className='bubble'>
				{(isValid && 
				<div className='password-tip-title ok'>Password is ok</div>)
				||
				(!isValid && 
				<div className='password-tip-title'>Password Rules:</div>
				)}

				{(reqs.minimumLength && 
				<div className='req-row grid'>
					<div className='status-icon'>
						<StatusIcon isValid={passwordProgress.minimumLength}></StatusIcon>
					</div>
					<div className='description'>
						{reqs.minimumLength} characters minimum
					</div>
				</div>
				)}
				{(reqs.numberOfCapitals && 
				<div className='req-row grid'>
					<div className='status-icon'>
						<StatusIcon isValid={passwordProgress.numberOfCapitals}></StatusIcon>
					</div>
					<div className='description'>
						Contains at least {reqs.numberOfCapitals} capital letter
					</div>
				</div>
				)}
				{(reqs.numberOfNumbers && 
				<div className='req-row grid'>
					<div className='status-icon'>
						<StatusIcon isValid={passwordProgress.numberOfNumbers}></StatusIcon>
					</div>
					<div className='description'>
						Contains at least {reqs.numberOfNumbers} number
					</div>
				</div>
				)}
				{(reqs.numberOfSymbols && 
				<div className='req-row grid'>
					<div className='status-icon'>
						<StatusIcon isValid={passwordProgress.numberOfSymbols}></StatusIcon>
					</div>
					<div className='description'>
						Contains at least {reqs.numberOfSymbols} symbol
					</div>
				</div>
				)}
				{(reqs.noRestrictedWords && 
				<div className='req-row grid'>
					<div className='status-icon'>
						<StatusIcon isValid={passwordProgress.noRestrictedWords}></StatusIcon>
					</div>
					<div className='description'>
						Can&apos;t be <span> {restrictedWordsToMarkup(restrictedWords)} </span>
					</div>
				</div>
				)}
			</div>
		</div>
	);
};

PasswordTip.propTypes = propTypes;

export default PasswordTip;
