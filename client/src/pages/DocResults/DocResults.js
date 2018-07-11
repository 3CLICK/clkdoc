import React, { Component } from "react";
import Nav from "../../components/Nav";
import MainSearch from "../../components/MainSearch";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
import DocDropdown from "../../components/DocDropdown";
import PatientDropdown from "../../components/PatientDropdown";
import GuestDropdown from "../../components/GuestDropdown";
import Results from "../../components/Results";
import DocCard from "../../components/DocCard";


class DocResults extends Component {

  render() {
    return (
      <div>
        <Nav title="ClkDoc" sidebar={<Sidebar/>} prompt={<GuestDropdown/>}/>   
   		<Results doc={<DocCard/>} />         

        <Footer/>
      </div>
    );
  };


};

export default DocResults;
