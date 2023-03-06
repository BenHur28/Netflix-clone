import React, { useState } from "react";
import logo from "../assets/netflix_logo.png";
import SignUpScreen from "./SignUpScreen";

const Login = () => {
	const [signIn, setSignIn] = useState(false);

	return (
		<div className="h-screen w-screen bg-cover bg-fade-pattern">
			{signIn ? (
				<SignUpScreen />
			) : (
				<>
					<div className="flex justify-between z-10">
						<img className="fixed left-0 top-2 h-16 w-30 pl-20 cursor-pointer" src={logo} alt="" />
						<button onClick={() => setSignIn(true)} className="bg-red-600 text-white rounded-sm px-5 py-2 fixed right-20 top-4 cursor-pointer">
							Sign In
						</button>
					</div>
					<div className="flex flex-col justify-center w-screen items-center fixed top-1/3 z-10">
						<h1 className="text-white text-5xl text-center mb-3">Unlimited films, TV programmes and more.</h1>
						<h2 className="text-white text-3xl text-center mb-3">Watch anywhere. Cancel at any time.</h2>
						<h3 className="text-white text-xl text-center mb-3">Ready to watch? Enter your email to create or restart your membership</h3>
						<div>
							<form className="text-center w-screen">
								<input className="w-1/4 py-2 pl-3 outline-none" type="email" placeholder="Email Address" />
								<button onClick={() => setSignIn(true)} className="bg-red-600 text-white py-2 px-4">
									Get Started
								</button>
							</form>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default Login;
