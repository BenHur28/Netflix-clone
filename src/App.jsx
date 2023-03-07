import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import LoginScreen from "./pages/LoginScreen";
import ProfileScreen from "./pages/ProfileScreen";
import { auth } from "./firebase";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";

function App() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((userAuth) => {
			if (userAuth) {
				dispatch(
					login({
						uid: userAuth.uid,
						email: userAuth.email,
					})
				);
			} else {
				dispatch(logout);
			}
		});
		return unsubscribe;
	}, []);

	console.log(user);
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					{!user ? (
						<Route path="/" element={<LoginScreen />} />
					) : (
						<>
							<Route path="/" element={<HomeScreen />} />
							<Route path="/profile" element={<ProfileScreen />} />
						</>
					)}
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
