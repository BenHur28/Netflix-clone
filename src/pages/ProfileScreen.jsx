import React from "react";
import Navbar from "../components/Navbar";
import Plans from "../components/Plans";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";

const ProfileScreen = () => {
	const user = useSelector(selectUser);
	const navigate = useNavigate();

	const signOut = () => {
		auth.signOut();
		navigate("/");
	};

	return (
		<div className="bg-black w-screen h-screen">
			<Navbar />
			<div className="flex flex-col absolute w-1/2 top-1/4 left-1/4">
				<h1 className="text-white text-4xl mb-6">Edit Profile</h1>
				<div className="flex flex-row ">
					<img className="h-24 w-24" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
					<div className="flex flex-col ml-10 w-full">
						<h1 className="text-white bg-slate-500 py-2 pl-4 mb-6">{user.email}</h1>
						<Plans />
						<button onClick={signOut} className="bg-red-500 text-white w-full mt-12 py-2">
							Sign out
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileScreen;
