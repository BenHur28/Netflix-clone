import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";

const HomeScreen = () => {
	return (
		<div className="h-screen bg-zinc-900">
			<Navbar />
			<Banner />
		</div>
	);
};

export default HomeScreen;
