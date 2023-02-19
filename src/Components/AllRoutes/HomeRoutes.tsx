import React from "react";
import { useRoutes } from "react-router";
import ForgetPass from "../Auth/ForgetPass";
import ResetPass from "../Auth/ResetPass";
import SignIn from "../Auth/SignIn";
import Signup from "../Auth/Signup";
import Homescreen from "../HomeScreen";
import Header from "../LandingPage/Header/Header";


const HomeRoutes = () => {
	let element = useRoutes([
		{
			path: "/",
			element: (
			<>
			<Header />
			<Homescreen />
			</>
		
			),
		},
		{
			path: "/signup",
			element: <Signup />,
		},
		{
			path: "/signin",
			element: <SignIn />,
		},
		{
			path: "/forget",
			element: <ForgetPass />,
		},
		{
			path: "/reset",
			element: <ResetPass />,
		},
	]);
	return element;
};

export default HomeRoutes;
