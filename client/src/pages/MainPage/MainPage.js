import React, { Component } from "react";
import Nav from "../../components/Nav";
import MainSearch from "../../components/MainSearch";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
import GuestDropdown from "../../components/GuestDropdown";


class MainPage extends Component {
	
  render() {
    return (
      <div>
				<Nav prompt={<GuestDropdown />} sidebar={<Sidebar />}/>
        <MainSearch />
        <Footer/>
      </div>
    );
  };


};

export default MainPage;


