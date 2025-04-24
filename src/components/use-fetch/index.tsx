import { useEffect, useState } from "react";

interface DataModel {
	id: string;
	title: string;
}

interface Products {
	products: DataModel[];
}

export default function useFetch(url: string, options: RequestInit = {}) {
	const [data, setData] = useState<Products | undefined>(undefined);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<Error | null>(null);

	async function fetchData() {
		setLoading(true);
		try {
			const response = await fetch(url, { ...options });
			if (!response.ok) throw new Error(response.statusText);

			const result: Products = await response.json();

			if (result) {
				setData(result);
				setError(null);
			}
		} catch (error) {
			if (error instanceof Error) {
				setError(error);
			}
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		fetchData();
	}, [url]);

	return { data, error, loading };
}
