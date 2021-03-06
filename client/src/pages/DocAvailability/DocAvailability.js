import React, { Component } from "react";
import MainSearch from "../../components/MainSearch";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
import DocDropdown from "../../components/DocDropdown";
import PatientDropdown from "../../components/PatientDropdown";
import GuestDropdown from "../../components/GuestDropdown";
import DocBanner from "../../components/DocBanner";
import AppointmentCard from "../../components/AppointmentCard";



class DocAvailability extends Component {

  render() {
    return (
      <div>
        <DocBanner />
        {/*NEED mapping function so that Apointment card below only appears if there are available appointments for the given doctor*/}
        <AppointmentCard />
            
            
        <Footer/>
      </div>
    );
  };


};

export default DocAvailability;