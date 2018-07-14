import React, { Component } from "react";
import Nav from "../../components/Nav";
import MainSearch from "../../components/MainSearch";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
import DocDropdown from "../../components/DocDropdown";
import PatientDropdown from "../../components/PatientDropdown";
import GuestDropdown from "../../components/GuestDropdown";
import DocBanner from "../../components/DocBanner";
// import AppointmentCard from "../../components/AppointmentCard";
import DocAppointmentCard from "../../components/DocAppointmentCard";



class DocAppointments extends Component {

  render() {
    return (
      <div>
        <Nav title="ClkDoc" sidebar={<Sidebar/>} prompt={<GuestDropdown/>}/>
        <DocBanner />
        {/*NEED mapping function so that Apointment card below only appears if there are available appointments for the given doctor*/}
        <DocAppointmentCard />
            
            
        <Footer/>
      </div>
    );
  };


};

export default DocAppointments;