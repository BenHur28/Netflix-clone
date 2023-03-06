import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Row from "../components/Row";
import requests from "../request";

const HomeScreen = () => {
	return (
		<div className="h-screen bg-zinc-900">
			<Navbar />
			<Banner />
			<Row title="Top Rated" fetch={requests.fetchTopRated} />
			<Row title="Action Movies" fetch={requests.fetchActionMovies} />
			<Row title="Comedy Movies" fetch={requests.fetchComedyMovies} />
			<Row title="Horror Movies" fetch={requests.fetchHorrorMovies} />
			<Row title="Romance Movies" fetch={requests.fetchRomanceMovies} />
			<Row title="Documentaries Movies" fetch={requests.fetchDocumentaries} />
		</div>
	);
};

export default HomeScreen;
