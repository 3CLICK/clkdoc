import React from "react";
import "./Nav.css";

const Nav = props => (
<nav class="navbar">
	<h1 class="text-center">
	     {props.sidebar}

	      <a><strong class="text-center">{props.title}</strong></a>

	  <a class="align-right" href="#signup" data-toggle="modal" data-target=".bs-modal-sm">
	  	<span class="glyphicon glyphicon-user pull-right" aria-hidden="true"></span>
	  </a>
	</h1>
</nav>
);

export default Nav;
