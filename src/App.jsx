import "./App.css";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import LoginScreen from "./pages/LoginScreen";
import { auth } from "./firebase";
import { useEffect } from "react";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/">
			<Route index element={<HomeScreen />} />
			<Route path="/login" element={<LoginScreen />} />
		</Route>
	)
);

function App() {
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((userAuth) => {
			if (userAuth) {
				console.log(userAuth);
				console.log("logged in");
			} else {
				console.log("logged out");
			}
		});
		return unsubscribe;
	}, []);

	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
