import React, { Component } from "react";
import Nav from "../../components/Nav";
import MainSearch from "../../components/MainSearch";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
import DocDropdown from "../../components/DocDropdown";
import PatientDropdown from "../../components/PatientDropdown";
import GuestDropdown from "../../components/GuestDropdown";


class MainPage extends Component {

  render() {
    return (
      <div>
        <Nav title="ClkDoc" sidebar={<Sidebar/>} prompt={<GuestDropdown/>}/>

            
            
        <MainSearch />
        <Footer/>
      </div>
    );
  };


};

export default MainPage;


