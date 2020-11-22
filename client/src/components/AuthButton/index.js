import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import {UserContext} from "../../utils/UserContext";
import { Link } from "react-router-dom";

const AuthButton = () => {
	console.log("NAV", User.isAuthenticated);

	const [User, dispatch] = useContext(UserContext);
	const history = useHistory();

	return (
		User.isAuthenticated ? (
			<button className="btn btn-danger"
				onClick={() => {
					User.signout(() => history.push('/login'))
					dispatch({
						type: "GET_USER",
						payload: {}
					})
				}}>
				Logout
			</button>
		) : (
				<Link
					className="btn btn-success"
					to="/login"
				>Login
				</Link>
			)
	)
}

export default AuthButton;