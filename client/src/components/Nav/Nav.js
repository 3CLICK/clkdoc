import React, { Component } from "react";
import "./Nav.css";
import DocDropdown from "../../components/DocDropdown";
import PatientDropdown from "../../components/PatientDropdown";
import GuestDropdown from "../../components/GuestDropdown";
import Sidebar from "../../components/Sidebar";


class Nav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: this.props.user
		}
	}
	render() {
		// Conditional rendering
		let dropDown;
		if (this.props.prompt == 'Doctor') {
			dropDown = <DocDropdown />;
		} else if (this.props.prompt == 'Patient') {
			dropDown = <PatientDropdown />;
		} else dropDown = <GuestDropdown />;


		return (
			<nav className="navbar">
				<div className="container-fluid">
					<h1 className="text-center">
						<Sidebar/>
						<a>
							<strong className="text-center">
								{this.props.prompt}
							</strong>
						</a>
						{dropDown}
					</h1>
				</div>
			</nav>
		);
	}
}

export default Nav;
