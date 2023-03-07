import React, { useEffect, useState } from "react";
import db from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore/lite";

const Plans = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		getData();
	}, []);

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

	console.log(products);
	return <div>Plans</div>;
};

export default Plans;
