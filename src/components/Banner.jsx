import axios from "../axios";
import React, { useEffect, useState } from "react";
import requests from "../request.jsx";

const Banner = () => {
	function truncate(string, n) {
		return string?.length > n ? string.substr(0, n - 1) + "..." : string;
	}

	const [movie, setMovie] = useState([]);
	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(requests.fetchTrending);
			setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
			return request;
		}
		fetchData();
	}, []);

	console.log(movie);

	return (
		<div
			className="relative bg-cover bg-center object-contain h-4/5"
			style={{
				backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
			}}
		>
			<div className="flex flex-col justify-end h-full ml-20 pb-20">
				<h1 className="text-white text-5xl">{movie?.title || movie?.name || movie?.original_name}</h1>
				<h2 className="text-white text-lg ml-0.5 mt-4 w-1/3">{truncate(movie?.overview, 150)}</h2>
				<div className="ml-1 mt-4">
					<button className="text-white bg-zinc-700 text-xl px-10 py-3 rounded-md mr-5 transition-colors duration-500 hover:bg-white hover:text-black">
						Play
					</button>
					<button className="text-white bg-zinc-700 text-xl px-10 py-3 rounded-md transition-colors duration-500 hover:bg-white hover:text-black">
						My List
					</button>
				</div>
			</div>
		</div>
	);
};

export default Banner;
