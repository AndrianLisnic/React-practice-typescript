import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";

interface ImageSliderProps {
	url: string;
	page: number;
	limit: number;
}

interface Image {
	id: string;
	download_url: string;
}

export default function ImageSlider({
	url,
	page = 1,
	limit = 5,
}: ImageSliderProps) {
	const [images, setImages] = useState<Image[]>([]);
	const [currentSlide, setCurrentSlide] = useState<number>(0);
	const [errorMsg, setErrorMsg] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(false);

	async function fetchImages(getUrl: string) {
		try {
			setLoading(true);
			const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
			const data = await response.json();

			if (data) {
				setImages(data);
				setLoading(false);
			}
		} catch (e) {
			if (e instanceof Error) {
				setErrorMsg(e.message);
			} else {
				console.error("Unknown error:", e);
			}

			setLoading(false);
		}
	}

	function handlePrevios() {
		setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
	}

	function handleNext() {
		setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
	}

	useEffect(() => {
		if (url !== "") fetchImages(url);
	}, [url]);

	if (loading) {
		return <div>Loading data, please wait!</div>;
	}

	if (errorMsg) {
		return <div>Error occured! {errorMsg}</div>;
	}

	return (
		<div className="container">
			<BsArrowLeftCircleFill
				onClick={handlePrevios}
				className="arrow arrow-left"
			/>
			{images && images.length
				? images.map((item, index) => (
						<img
							key={item.id}
							alt={item.download_url}
							src={item.download_url}
							className={
								currentSlide === index
									? "current-image"
									: "current-image hide-current-image"
							}
							width={300}
						></img>
				  ))
				: null}
			<BsArrowRightCircleFill
				onClick={handleNext}
				className="arrow arrow-right"
			/>
			<span className="circle-indicators">
				{images && images.length
					? images.map((_, index) => (
							<button
								key={index}
								className={
									currentSlide === index
										? "current-indicator"
										: "current-indicator inactive-indicator"
								}
								onClick={() => setCurrentSlide(index)}
							></button>
					  ))
					: null}
			</span>
		</div>
	);
}
