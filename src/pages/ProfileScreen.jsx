import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { selectUser } from "../features/userSlice";

const ProfileScreen = () => {
	const user = useSelector(selectUser);

	return (
		<div className="bg-black w-screen h-screen">
			<Navbar />
			<div className="flex flex-col absolute w-1/3 top-1/4 left-1/3">
				<h1 className="text-white text-4xl mb-6">Edit Profile</h1>
				<div className="flex flex-row ">
					<img className="h-24 w-24" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
					<div className="flex flex-col ml-10 w-full">
						<h1 className="text-white bg-slate-500 py-2 pl-4 mb-6">Email goes here</h1>
						<h2 className="text-white underline">Plans "Current Plan:"</h2>
						<h2 className="text-white mt-6">Renewal date:</h2>
						<div className="flex flex-row justify-between items-center mt-10">
							<h2 className="text-white ml-4">Netflix Standard</h2>
							<button className="bg-red-500 text-white py-2 px-6 mr-4">Subscribe</button>
						</div>
						<div className="flex flex-row justify-between items-center mt-12">
							<h2 className="text-white ml-4">Netflix Standard</h2>
							<button className="bg-red-500 text-white py-2 px-6 mr-4">Subscribe</button>
						</div>
						<div className="flex flex-row justify-between items-center mt-12">
							<h2 className="text-white ml-4">Netflix Standard</h2>
							<button className="bg-red-500 text-white py-2 px-6 mr-4">Subscribe</button>
						</div>
						<button className="bg-red-500 text-white w-full mt-12 py-2">Sign out</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileScreen;
