import { useLayoutEffect, useState } from "react";

interface IWindowSize {
	width: number;
	height: number;
}

export default function useWindowResize(): IWindowSize {
	const [windowSize, setWindowSize] = useState<IWindowSize>({
		width: 0,
		height: 0,
	});

	function handleResize(): void {
		setWindowSize({
			width: window.innerWidth,
			height: window.innerHeight,
		});
	}

	useLayoutEffect(() => {
		handleResize();
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return windowSize;
}
