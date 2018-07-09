import React from "react";
import "./Sidebar.css"

//NEED THESE FUNCTIONS IN SOMEHOW ON THE PAGE
    // function w3_open() {
    //     document.getElementById("mySidebar").style.display = "block";
    // }

    // function w3_close() {
    //     document.getElementById("mySidebar").style.display = "none";
    // }
//THE SPAN TAG NEEDS THE FOLLOWING PASSED THROUGH

const Sidebar = props => (


  <a class="align-left">
      <span class="glyphicon glyphicon-th pull-left" aria-hidden="true" {...props}></span>
  </a>

	{/*sidebar*/}
    <div class="w3-sidebar w3-bar-block w3-border-right" style="display:none;top:0;left:0;position:absolute;" id="mySidebar">
      <button onclick="w3_close()" class="w3-bar-item w3-large">Close &times;</button>
      <a href="#" class="w3-bar-item w3-button">Home</a>
      <a href="#" class="w3-bar-item w3-button">About</a>
      <a href="#" class="w3-bar-item w3-button">Contact</a>
    </div>

);

export default Sidebar;