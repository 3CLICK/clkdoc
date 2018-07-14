import React from "react";
import "./Footer.css";


const Footer = props => (

<footer>
        <ul className="nav nav-pills" display>
          <li className="disabled"><h5>Terms of Service</h5></li>
          <li className="disabled"><h5>Privacy Policy</h5></li>
          <li className="disabled"><h5>Site Map</h5></li>
          <li id="copyClk"><h4><strong>clkDoc © 2018</strong></h4></li>
          <li className="pull-right"><p className="fa fa-github" style={{color: 'white'}} /></li>
          <li className="pull-right"><p className="fa fa-twitter" style={{color: 'white'}} /></li>  
          <li className="pull-right"><p className="fa fa-facebook" style={{color: 'white'}} /></li>
        </ul>
      </footer>

);

export default Footer;
