import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";

export default function StarRating({ noOfStars = 5 }) {
	const [rating, setRating] = useState<number>(
		Number(localStorage.getItem("rating"))
	);
	const [hover, setHover] = useState<number>(0);

	function handleClick(currentIndex: number) {
		setRating(currentIndex);
		localStorage.setItem("rating", String(currentIndex));
	}

	function handleMouseEnter(currentIndex: number) {
		setHover(currentIndex);
	}

	function handleMouseLeave() {
		setHover(rating);
	}

	return (
		<div className="star-rating">
			{[...Array(noOfStars)].map((item, index) => {
				index += 1;

				return (
					<FaStar
						key={index}
						className={index <= (hover || rating) ? "active" : "inactive"}
						onClick={() => handleClick(index)}
						onMouseEnter={() => handleMouseEnter(index)}
						onMouseLeave={() => handleMouseLeave()}
						size={40}
					/>
				);
			})}
		</div>
	);
}
