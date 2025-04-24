import { useEffect, useState } from "react";
import "./styles.css";

interface DataModel {
	id: string;
	title: string;
}

export default function ScrollIndicator({ url }: { url: string }) {
	const [data, setData] = useState<DataModel[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [errorMsg, setErrorMsg] = useState<string>("");
	const [scrollPercentage, setScrollPercentage] = useState<number>(0);

	async function fetchData(getUrl: string) {
		try {
			setLoading(true);
			const response = await fetch(getUrl);
			const data = await response.json();

			if (data && data.products && data.products.length > 0) {
				setData(data.products);
				setLoading(false);
			}
		} catch (error) {
			console.log(error);
			if (error instanceof Error) {
				setErrorMsg(error.message);
			}
			setLoading(false);
		}
	}

	function handleScrollPercentage() {
		const howMuchScrolled =
			document.body.scrollTop || document.documentElement.scrollTop;

		const heightToScroll =
			document.documentElement.scrollHeight -
			document.documentElement.clientHeight;

		setScrollPercentage((howMuchScrolled / heightToScroll) * 100);
	}

	useEffect(() => {
		fetchData(url);
	}, [url]);

	useEffect(() => {
		window.addEventListener("scroll", handleScrollPercentage);

		return () => {
			window.removeEventListener("scroll", () => {});
		};
	}, []);

	if (loading) {
		return <h1>Loading data...</h1>;
	}

	if (errorMsg) {
		return <h1>{errorMsg}</h1>;
	}

	return (
		<div>
			<div className="top-container">
				<h1>Custom scroll indicator</h1>
				<div className="scroll-progress-tracking-container">
					<div
						className="current-progress-bar"
						style={{ width: `${scrollPercentage}%` }}
					></div>
				</div>
			</div>

			<div className="data-container">
				{data && data.length > 0
					? data.map((dataItem) => <p key={dataItem.id}>{dataItem.title}</p>)
					: null}
			</div>
		</div>
	);
}
