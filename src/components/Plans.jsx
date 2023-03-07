import React, { useEffect, useState } from "react";
import db from "../firebase";
import { collection, query, where, getDocs, onSnapshot, addDoc } from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

const Plans = () => {
	const [products, setProducts] = useState([]);
	const user = useSelector(selectUser);
	const [subscription, setSubscription] = useState(null);

	useEffect(() => {
		getData();
	}, []);

	useEffect(() => {
		getSub();
	}, [user.uid]);

	const getData = async () => {
		const productsRef = collection(db, "products");
		const q = query(productsRef, where("active", "==", true));
		const querySnapshot = await getDocs(q);
		const products = {};
		querySnapshot.forEach(async (productDoc) => {
			products[productDoc.id] = productDoc.data();
			const priceSnap = collection(productDoc.ref, "prices");
			const q = await getDocs(priceSnap);
			q.docs.forEach((price) => {
				products[productDoc.id].prices = {
					priceId: price.id,
					priceData: price.data(),
				};
			});
			setProducts(products);
		});
	};

	const getSub = async () => {
		const docRef = await getDocs(collection(db, `customers/${user.uid}/subscriptions`));
		docRef.forEach(async (subscription) => {
			setSubscription({
				role: subscription.data().role,
				current_period_end: subscription.data().current_period_end.seconds,
				current_period_start: subscription.data().current_period_start.seconds,
			});
		});
	};

	const loadCheckout = async (priceId) => {
		const docRef = await addDoc(collection(db, `customers/${user.uid}/checkout_sessions`), {
			price: priceId,
			success_url: window.location.origin,
			cancel_url: window.location.origin,
		});

		onSnapshot(docRef, (snap) => {
			const { error, url } = snap.data();
			if (error) {
				alert(`An error occured: ${error.message}`);
			}
			if (url) {
				window.location.assign(url);
			}
		});
	};

	return (
		<div>
			<h2 className="text-white text-xl">Renewal date: {new Date(subscription?.current_period_end * 1000).toLocaleDateString()}</h2>
			{Object.entries(products).map(([productId, productData]) => {
				const isCurrentPackage = productData.name?.includes(subscription?.role);
				let style = "bg-red-500 text-white py-2 px-6 mr-4";
				if (isCurrentPackage) {
					style = "bg-gray-600 text-white py-2 px-6 mr-4 disabled";
				}
				return (
					<div key={productId} className="flex flex-row justify-between items-center mt-10">
						<h2 className="text-white ml-4">
							{productData.name} - {productData.description} videos
						</h2>
						<button onClick={() => !isCurrentPackage && loadCheckout(productData.prices.priceId)} className={style}>
							{isCurrentPackage ? "Current Package" : "Subscribe"}
						</button>
					</div>
				);
			})}
		</div>
	);
};

export default Plans;
