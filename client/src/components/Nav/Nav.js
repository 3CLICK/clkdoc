import React from "react";
import "./Nav.css";

const Nav = props => (
<nav className="navbar">
	<div className="container-fluid">
	<h1 className="text-center">
	    {props.sidebar}

	      <a><strong className="text-center">{props.user === 'doctor'?'doctor':'Patient'}</strong></a>

	    {props.prompt}  	
	</h1>
	</div>
</nav>
);

export default Nav;
