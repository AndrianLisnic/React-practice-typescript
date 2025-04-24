import useWindowResize from ".";

interface IWindowSize {
	width: number;
	height: number;
}

export default function UseWindowResizeTest() {
	const { width, height }: IWindowSize = useWindowResize();

	return (
		<div>
			<h1>Use Window Resize Hook</h1>
			<p>Width is {width}</p>
			<p>Height is {height}</p>
		</div>
	);
}
