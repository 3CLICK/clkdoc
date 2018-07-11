import React from "react";
import "./Nav.css";

const Nav = props => (
<nav class="navbar">
	<div class="container-fluid">
	<h1 class="text-center">
	    {props.sidebar}

	      <a><strong class="text-center">{props.title}</strong></a>

	    {props.prompt}  	
	</h1>
	</div>
</nav>
);

export default Nav;
