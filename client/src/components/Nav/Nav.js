import React from "react";
import "./Nav.css";

const Nav = props => (
<nav class="navbar" >
  <div class="container-fluid text-center">
    <h1>
    {props.children}
    </h1>
  </div>
</nav>
);



export default Nav;
