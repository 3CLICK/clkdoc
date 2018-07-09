import React, { Components } from "react";
import Nav from "../../components/Nav";
import MainSearch from "../../components/MainSearch";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
import API from "../../utils/API";


class MainPage extends Component {
  docSearch = {
    zip: "",
    specialty: "",
    synopsis: "",
  }

  w3_open = event => {
    document.getElementById("mySidebar").style.display = "block";
  };
  
  w3_close = event => {
    document.getElementById("mySidebar").style.display = "none";
  };

  render() {
    return (
      <Nav>
        <Sidebar onClick={this.w3_open}/>
      </Nav>
      <div class="container">
        <MainSearch/>
      </div>
      <Footer/>
    );
  }


}