import React, { Component } from "react";
import "./Nav.css";
import DocDropdown from "../../components/DocDropdown";
import PatientDropdown from "../../components/PatientDropdown";
import GuestDropdown from "../../components/GuestDropdown";
import API from '../../utils/API'

class Nav extends Component {
	constructor(props){
		super(props)
		API.getUser()
			.then(data => {
				if (data.data == 'doctor') {
					this.setState({ prompt: <DocDropdown/> })
				} else if (data.data == 'patient') {
					this.setState({ prompt: <PatientDropdown /> })
				} else this.setState({ prompt: <GuestDropdown /> })
			})
	}
	
	state = {
		prompt: ''
	}


	render() {
		return (
			<nav className="navbar">
				<div className="container-fluid">
					<h1 className="text-center">
						{this.props.sidebar}
						<a><strong className="text-center">{this.props.user === 'doctor' ? 'doctor' : 'Patient'}</strong></a>
						{this.state.prompt}
					</h1>
				</div>
			</nav>
		);
	}
}

export default Nav;
