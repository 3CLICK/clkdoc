import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from '../../components/Nav';
import Footer from "../../components/Footer";
import MainPage from "../../pages/MainPage";
import DocAvailability from "../../pages/DocAvailability";
import DocResults from "../../pages/DocResults";
// import DocAppointments  from "./pages/DocAppointments";
import NoMatch from '../../pages/NoMatch';
import API from '../../utils/API'

class Wrapper extends Component {

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
			<Router>
				<div>
					<Nav />
					<Switch>
						<Route exact path="/" component={MainPage} />
						{/* <Route exact path="/doctors/appointments/:id" component={DocAppointments} /> */}
						<Route exact path="/doctors" component={DocResults} />
						<Route exact path="/doctors/:id" component={DocAvailability} />
						<Route component={NoMatch} />
					</Switch>
					<Footer />
				</div>
			</Router>
    );
  };


};

export default Wrapper;


