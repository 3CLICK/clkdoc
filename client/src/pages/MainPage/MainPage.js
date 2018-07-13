import React, { Component } from "react";
import Nav from "../../components/Nav";
import MainSearch from "../../components/MainSearch";
import Footer from "../../components/Footer";
import API from '../../utils/API'

class MainPage extends Component {

	constructor(props){
		super(props);
		this.state = {}
		API.getSelf()
			.then(logedUser => {
					this.setState({ prompt: logedUser.data.userType})
			})
			.catch(err =>{
				this.setState({ prompt: "Guest"})
			});
	}
  render() {
    return (
      <div>
				<Nav prompt={this.state.prompt}/>
				{/* <Nav prompt={"Doctor"}/> */}
        <MainSearch />
        <Footer/>
      </div>
    );
  };


};

export default MainPage;


