import React, { useRef } from "react";
import { auth } from "../firebase";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const SignUpScreen = () => {
	const emailRef = useRef(null);
	const passwordRef = useRef(null);
	const authApp = getAuth(auth.app);

	const register = (e) => {
		e.preventDefault();
		createUserWithEmailAndPassword(authApp, emailRef.current.value, passwordRef.current.value)
			.then((authUser) => {
				console.log(authUser);
			})
			.catch((error) => {
				alert(error.message);
			});
	};

	const signIn = (e) => {
		e.preventDefault();
		signInWithEmailAndPassword(authApp, emailRef.current.value, passwordRef.current.value)
			.then((authUser) => {
				console.log(authUser);
			})
			.catch((error) => {
				alert(error.message);
			});
	};

	return (
		<div className="flex flex-row justify-center items-center h-full w-full">
			<form className="flex flex-col bg-black py-12 px-20">
				<h1 className="text-white text-3xl mb-10">Sign In</h1>
				<input ref={emailRef} className="mb-6 mr-20 px-2 py-2 w-full rounded-sm" type="email" placeholder="Email" />
				<input ref={passwordRef} className="mb-6 px-2 py-2 rounded-sm" type="password" placeholder="Password" />
				<button type="submit" onClick={signIn} className="text-white py-2 bg-red-600 mb-6 rounded-sm">
					Sign In
				</button>
				<h2>
					<span className="text-gray-300">New to Netflix? </span>
					<span className="text-white pl-3 hover:cursor-pointer hover:underline" onClick={register}>
						Sign up now.
					</span>
				</h2>
			</form>
		</div>
	);
};

export default SignUpScreen;
