import { useRef } from "react";
import useFetch from "../use-fetch";

interface DataModel {
	id: string;
	title: string;
}

interface Product {
	products: DataModel[];
}

interface FetchResult {
	data: Product;
	error: Error | null;
	loading: boolean;
}

export default function ScrollToTopAndBottom() {
	const { data, error, loading } = useFetch(
		"https://dummyjson.com/products?limit=100",
		{}
	) as FetchResult;

	const bottomRef = useRef<HTMLHeadingElement | null>(null);

	function handleScrollToTop() {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	}

	function handleScrollToBottom() {
		if (bottomRef.current) {
			bottomRef.current.scrollIntoView({ behavior: "smooth" });
		}
	}

	if (loading) {
		return <h2>Loading data, please wait...</h2>;
	}
	if (error) {
		return <h2>{error.message}</h2>;
	}

	return (
		<div>
			<h1>Scroll to Top and Bottom feature</h1>
			<h3>This is the top section</h3>
			<button onClick={handleScrollToBottom}>Scroll to Bottom</button>

			<ul>
				{data && data.products && data.products.length > 0
					? data.products.map((item) => <li key={item.id}>{item.title}</li>)
					: null}
			</ul>

			<button onClick={handleScrollToTop}>Scroll to Top</button>
			<h3 ref={bottomRef}>This is the bottom section</h3>
		</div>
	);
}
