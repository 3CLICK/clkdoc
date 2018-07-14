import React, { Component } from "react";

class InputText extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.props.onTextChange(event.target.value);
	}

	render() {
		const val = this.props.val;
		const key = this.props.id || "input-text";
		const type = this.props.type || "text";
		const placeholder = this.props.placeholder || "Type Here";
		const label = this.props.label || "Label";
		const compId = this.props.id || "input-text";
		return (
			<div className="form-group">
				<label for={compId}>{label}</label>
				<input
					key={key}
					className="form-control"
					type={type}
					placeholder={placeholder}
					value={val}
					onChange={this.handleChange}
				/>
			</div>
		);
	}
}

export default InputText;

