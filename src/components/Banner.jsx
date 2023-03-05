import React from "react";

const Banner = () => {
	function truncate(string, n) {
		return string?.length > n ? string.substr(0, n - 1) + "..." : string;
	}

	return (
		<div
			className="relative bg-cover bg-center object-contain h-3/5"
			style={{
				backgroundImage: "url('https://images.pexels.com/videos/3045163/free-video-3045163.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500')",
				// "url('https://res.cloudinary.com/practicaldev/image/fetch/s--THrf5Yjw--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/n6brz4p7iq7j1mulo1nv.jpg')",
			}}
		>
			<div className="ml-20 pt-60">
				<h1 className="text-white text-5xl">Movie Title</h1>
				<h2 className="text-white text-lg ml-0.5 mt-4 w-1/3">
					{truncate(
						`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
						150
					)}
				</h2>
				<div className="ml-1 mt-4">
					<button className="text-white bg-gray-800 text-xl px-10 py-3 rounded-md mr-5 transition-colors duration-500 hover:bg-white hover:text-black">
						Play
					</button>
					<button className="text-white bg-gray-800 text-xl px-10 py-3 rounded-md transition-colors duration-500 hover:bg-white hover:text-black">
						My List
					</button>
				</div>
			</div>
		</div>
	);
};

export default Banner;
