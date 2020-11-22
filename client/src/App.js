import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch
} from 'react-router-dom';
import Auth from "./utils/Auth";
import Nav from "./components/Navbar/navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./pages/Profile";
import MyPets from "./pages/MyPets";
import AddPet from "./pages/AddPet"
import PublicRoute from "./pages/PublicRoute";
import ProtectedRoute from "./pages/ProtectedRoute";
import NoMatch from "./pages/NoMatch";
import { UserProvider } from "./utils/UserContext";
const dotenv = require("dotenv").config()

//Now we have all the stuff we need .. let's render some components with the Router
const AuthExample = () => (
	<UserProvider>
		<Router>
			<div>
				<div>
					<Nav />
					<Switch>
						<Route exact path="/" component={PublicRoute} />
						<Route path="/login" component={Login} />
						<Route path="/register" component={Register} />
						<Route exact path="/search/:id" component={Profile} />
						<Route path="/mypet:id" component={MyPets} />
						<Route path="/addpet/:id" component={AddPet} />
						<PrivateRoute path="/explore" component={ProtectedRoute} />
						<Route exact path="*" component={NoMatch} />
						<Route component={NoMatch} />
					</Switch>
				</div>
			</div>
		</Router>
	</UserProvider>
)

// This is the private route component this checks for an authorized user here
const PrivateRoute = ({ component: Component, ...rest }) => (
	<Router>
		<div>

			<Route {...rest} render={props => (

				Auth.isAuthenticated ? (
					<Component {...props} />
				) : (
						<div className="container">
							<div className="alert alert-danger text-center" role="alert">
								Sorry, this page is private to authenticated users.
					</div>
							<div className="row">
								<div className="col-sm"></div>
								<div className="col-sm">
									<h3>Please Register or Login</h3>
								</div>
								<div className="col-sm"></div>
							</div>
							<Redirect to={{
								pathname: '/login',
								state: { from: props.location }
							}} />
						</div>
					)
			)} />
		</div>
	</Router>
);


export default AuthExample;
