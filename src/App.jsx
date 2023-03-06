import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import "./App.css";
import HomeScreen from "./pages/HomeScreen";
import LoginScreen from "./pages/LoginScreen";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/">
			<Route index element={<HomeScreen />} />
			<Route path="/login" element={<LoginScreen />} />
		</Route>
	)
);

function App() {
	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
