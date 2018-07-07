import React from "react";
import "./Footer.css";

    //might need to get ride of the "onclick" embedding in the buttons
    function w3_open() {
        document.getElementById("mySidebar").style.display = "block";
    }
    function w3_close() {
        document.getElementById("mySidebar").style.display = "none";
    }

const Nav = props => (
<nav class="navbar" >
  <div class="container-fluid text-center">
  <h1>
       
  <a class="align-left">
      <span class="glyphicon glyphicon-th pull-left" aria-hidden="true" onclick="w3_open()"></span>
  </a>

      <strong>clkDoc</strong>


  {/*WE NEED TO PASS IN THE CORRECT COMPONENT WHEN: NOT LOGGED IN, PATIENT, OR DOCTOR*/}
  {/*END*/}
  
  </h1>
  </div>

{/*sidebar*/}
    <div class="w3-sidebar w3-bar-block w3-border-right" style="display:none;top:0;left:0;position:absolute;" id="mySidebar">
      <button onclick="w3_close()" class="w3-bar-item w3-large">Close &times;</button>
      <a href="#" class="w3-bar-item w3-button">Home</a>
      <a href="#" class="w3-bar-item w3-button">About</a>
      <a href="#" class="w3-bar-item w3-button">Contact</a>
    </div>


</nav>


);



export default Nav;
