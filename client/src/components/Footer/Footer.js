import React from "react";
import "./Footer.css";


const Footer = props => (

<footer>
        <ul className="nav nav-pills" display>
          <li role="presentation" className="disabled"><a href="#">Terms of Service</a></li>
          <li role="presentation" className="disabled"><a href="#">Privacy Policy</a></li>
          <li role="presentation" className="disabled"><a href="#">Site Map</a></li>
          <li role="presentation" className="disabled"><a href="#"><strong className="pull-right">clkDoc © 2018</strong></a></li>
          <li className="pull-right"><a className="fa fa-github" style={{color: 'white'}} /></li>
          <li className="pull-right"><a className="fa fa-twitter" style={{color: 'white'}} /></li>  
          <li className="pull-right"><a className="fa fa-facebook" style={{color: 'white'}} /></li>
        </ul>
      </footer>

);

export default Footer;
