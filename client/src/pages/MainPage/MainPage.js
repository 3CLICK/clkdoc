import React, { Component } from "react";
import MainSearch from "../../components/MainSearch";
import API from '../../utils/API'

class MainPage extends Component {

	constructor(props){
		super(props);
		this.state = {}
		API.getSelf()
			.then(logedUser => {
					this.setState({ 
						prompt: logedUser.data.userType,
						user: logedUser.data
					})
			})
			.catch(err =>{
				this.setState({ prompt: "Guest"});
				console.log("The User is not authenticated.");
			});
	}
  render() {
    return (
      <div>
        <MainSearch />
      </div>
    );
  };


};

export default MainPage;


