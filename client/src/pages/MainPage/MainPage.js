import React, { Component } from "react";
import Nav from "../../components/Nav";
import MainSearch from "../../components/MainSearch";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
import DocDropdown from "../../components/DocDropdown";
import PatientDropdown from "../../components/PatientDropdown";
import GuestDropdown from "../../components/GuestDropdown";
import API from "../../utils/API";
import { Link } from "react-router-dom";


class MainPage extends Component {
  // state = {
  //   user: {}
  // };
  // // When this component mounts, grab the book with the _id of this.props.match.params.id
  // // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  // componentDidMount() {
  //   API.getUser(this.props.match.params.id)
  //     .then(res => this.setState({ user: res.data }))
  //     .catch(err => console.log(err));
  // }

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


