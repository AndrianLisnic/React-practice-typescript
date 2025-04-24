import useFetch from ".";

interface DataModel {
	id: string;
	title: string;
}

interface Products {
	products: DataModel[];
}

interface ResponseModel {
	data: Products;
	error: Error | null;
	loading: boolean;
}

export default function UseFetchHookTest() {
	const { data, error, loading } = useFetch(
		"https://dummyjson.com/products",
		{}
	) as ResponseModel;

	return (
		<div>
			<h1>Use Fetch Hook</h1>
			{loading ? <h3>Loading data, please wait...</h3> : null}
			{error ? <h3>{error.message}</h3> : null}

			{data && data.products && data.products.length > 0
				? data.products.map((item) => <p key={item.id}>{item.title}</p>)
				: null}
		</div>
	);
}
