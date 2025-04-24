import { useEffect, useState } from "react";
import "./styles.css";

interface IProduct {
	id: string;
	thumbnail: string;
	title: string;
}

export default function LoadMoreData() {
	const [loading, setLoading] = useState<boolean>(false);
	const [products, setProducts] = useState<IProduct[]>([]);
	const [count, setCount] = useState<number>(0);
	const [disabledButton, setDisabledButton] = useState<boolean>(false);

	async function fetchProducts() {
		try {
			setLoading(true);
			const response = await fetch(
				`https://dummyjson.com/products?limit=20&skip=${
					count === 0 ? 0 : count * 20
				}`
			);
			const result = await response.json();

			if (result && result.products && result.products.length) {
				setProducts((prevProductsList) => [
					...prevProductsList,
					...result.products,
				]);
				setLoading(false);
			}
		} catch (e) {
			if (e instanceof Error) {
				console.log(e.message);
			} else {
				console.log(e);
			}
			setLoading(false);
		}
	}

	useEffect(() => {
		fetchProducts();
	}, [count]);

	useEffect(() => {
		if (products && products.length === 100) setDisabledButton(true);
	}, [products]);

	if (loading) {
		return <div>Loading data, please wait!</div>;
	}

	return (
		<div className="load-more-container">
			<div className="product-container">
				{products && products.length
					? products.map((item) => (
							<div className="product" key={item.id}>
								<img src={item.thumbnail} alt={item.title} />
								<p>{item.title}</p>
							</div>
					  ))
					: null}
			</div>
			<div className="button-container">
				<button disabled={disabledButton} onClick={() => setCount(count + 1)}>
					Load More Products
				</button>
				{disabledButton ? <p>You have reached to 100 products</p> : null}
			</div>
		</div>
	);
}
