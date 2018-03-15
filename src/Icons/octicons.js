import React, { Component } from 'react';

let defaultIconProps = {
	"fill": "#9b9b9b",
	"width": "25pt",
	"height": "25pt"
};

export class HomeIcon extends Component {
	render() {
		return (
			<svg version="1.1" 
				viewBox="0 0 16 16" 
				className="octicon octicon-home" 
				aria-hidden="true"
				width={this.props.width}  
				height={this.props.height} 
				fill={this.props.fill} 
			>
				<path fillRule="evenodd" 
						d="M16 9l-3-3V2h-2v2L8 1 0 9h2l1 5c0 
						.55.45 1 1 1h8c.55 0 1-.45 1-1l1-5h2zm-4 
						5H9v-4H7v4H4L2.81 7.69 8 2.5l5.19 
						5.19L12 14z"/>
			</svg>
		);
	}
}

export class SearchIcon extends Component {
	render() {
		return (
			<svg version="1.1" 
				viewBox="0 0 16 16" 
				className="octicon octicon-search" 
				aria-hidden="true"
				width={this.props.width}  
				height={this.props.height} 
				fill={this.props.fill} 
			>
				<path fillRule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/>
			</svg>
		);
	}
}


export class SettingsIcon extends Component {
	render() {
		return (
			<svg version="1.1" 
				viewBox="0 0 14 16" 
				className="octicon octicon-gear" 
				aria-hidden="true"
				width={this.props.width}  
				height={this.props.height} 
				fill={this.props.fill} 
			>
				<path fillRule="evenodd" d="M14 8.77v-1.6l-1.94-.64-.45-1.09.88-1.84-1.13-1.13-1.81.91-1.09-.45-.69-1.92h-1.6l-.63 1.94-1.11.45-1.84-.88-1.13 1.13.91 1.81-.45 1.09L0 7.23v1.59l1.94.64.45 1.09-.88 1.84 1.13 1.13 1.81-.91 1.09.45.69 1.92h1.59l.63-1.94 1.11-.45 1.84.88 1.13-1.13-.92-1.81.47-1.09L14 8.75v.02zM7 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
		
			</svg>
		
		);
	}
}

export class LocationIcon extends Component {
	render() {
		return (
			<svg version="1.1" 
				viewBox="0 0 12 16" 
				className="octicon octicon-location" 
				aria-hidden="true"
				width={this.props.width}  
				height={this.props.height}
				fill={this.props.fill}  
			>
				<path fillRule="evenodd" d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/>
			</svg>
		);
	}
}

export class PersonIcon extends Component {
	render() {
		return (
			<svg version="1.1" 
				viewBox="0 0 12 16" 
				className="octicon octicon-person" 
				aria-hidden="true"
				width={this.props.width}  
				height={this.props.height} 
				fill={this.props.fill} 
			>
				<path fillRule="evenodd" d="M12 14.002a.998.998 0 0 1-.998.998H1.001A1 1 0 0 1 0 13.999V13c0-2.633 4-4 4-4s.229-.409 0-1c-.841-.62-.944-1.59-1-4 .173-2.413 1.867-3 3-3s2.827.586 3 3c-.056 2.41-.159 3.38-1 4-.229.59 0 1 0 1s4 1.367 4 4v1.002z"/>
			</svg>
		
		);
	}
}

HomeIcon.defaultProps = defaultIconProps;
SettingsIcon.defaultProps = defaultIconProps;
LocationIcon.defaultProps = defaultIconProps;
PersonIcon.defaultProps = defaultIconProps;
SearchIcon.defaultProps = defaultIconProps;