import React, { useEffect, useState } from "react";

const Navbar = () => {
	const [show, handleShow] = useState(false);

	const transitionNavbar = () => {
		if (window.scrollY > 50) {
			handleShow(true);
			console.log("scrolling");
		} else {
			handleShow(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", transitionNavbar);
		return () => window.removeEventListener("scroll", transitionNavbar);
	}, []);

	return (
		<div
			className={`fixed top-0 py-10 w-full h-30 z-10 ${
				show ? "transition-colors ease-in duration-500 bg-black" : "transition-colors ease-in duration-500 bg-transparent"
			}`}
		>
			<div className="flex justify-between">
				<img className="fixed left-0 top-2 h-16 w-30 pl-20 cursor-pointer" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
				<img className="fixed right-20 top-4 w-12 h-12 cursor-pointer" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
			</div>
		</div>
	);
};

export default Navbar;
