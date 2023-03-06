import React, { useState } from "react";
import axios from "../axios";
import { useEffect } from "react";

const Row = (props) => {
	const [movie, setMovie] = useState([]);
	const base_url = "https://image.tmdb.org/t/p/original/";

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(props.fetch);
			setMovie(request.data.results);
			return request;
		}
		fetchData();
	}, []);

	console.log(props.title);
	console.log(movie);
	return (
		<div className="bg-zinc-900 py-10">
			<h1 className="text-white text-4xl mb-4 ml-20">{props.title}</h1>
			<div className="flex flex-row ml-20 overflow-y-hidden overflow-x-scroll scrollbar-hide">
				{movie.map((movie) => (
					<img className="max-w-70 max-h-48 object-contain rounded-md mr-5" src={`${base_url}${movie.backdrop_path}`} alt={movie.name} />
				))}
			</div>
		</div>
	);
};

export default Row;
