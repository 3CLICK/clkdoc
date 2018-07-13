import React, { Component } from "react";
import Nav from "../../components/Nav";
import MainSearch from "../../components/MainSearch";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
import DocDropdown from "../../components/DocDropdown";
import PatientDropdown from "../../components/PatientDropdown";
import GuestDropdown from "../../components/GuestDropdown";
import API from '../../utils/API'


class MainPage extends Component {
	whatTypeofUser(){
		API.getUser()
		.then(user => {
			console.log(user)
			if(user === 'doctor'){
			return <DocDropdown />
		} else if( user === 'patient') {
			return <PatientDropdown />
		} else return <GuestDropdown />
		})
		
	}
  render() {
    return (
      <div>
        <Nav title="ClkDoc" user="doctor" sidebar={<Sidebar/>} prompt={this.whatTypeofUser()}/>

             
            
        <MainSearch />
        <Footer/>
      </div>
    );
  };


};

export default MainPage;


