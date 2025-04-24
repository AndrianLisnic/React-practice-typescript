import { useRef } from "react";

interface IStyle {
	width: string;
	height: string;
	background: string;
}

interface DataModel {
	label: string;
	style: IStyle;
}

export default function ScrollToSection() {
	const data: DataModel[] = [
		{
			label: "First Card",
			style: {
				width: "100%",
				height: "600px",
				background: "red",
			},
		},
		{
			label: "Second Card",
			style: {
				width: "100%",
				height: "600px",
				background: "grey",
			},
		},
		{
			label: "Third Card",
			style: {
				width: "100%",
				height: "600px",
				background: "blue",
			},
		},
		{
			label: "Fourth Card",
			style: {
				width: "100%",
				height: "600px",
				background: "green",
			},
		},
		{
			label: "Fifth Card",
			style: {
				width: "100%",
				height: "600px",
				background: "orange ",
			},
		},
	];

	const ref = useRef<HTMLDivElement>(null);

	function handleScrollToSection() {
		let position: number = 0;
		if (ref.current) {
			position = ref.current.getBoundingClientRect().top;
		}

		window.scrollTo({
			top: position,
			behavior: "smooth",
		});
	}

	return (
		<div>
			<h1>Scroll to a particular sections</h1>
			<button onClick={handleScrollToSection}>Click to scroll</button>
			{data.map((item, index) => (
				<div key={index} ref={index === 1 ? ref : null} style={item.style}>
					<h3>{item.label}</h3>
				</div>
			))}
		</div>
	);
}
