import { useEffect } from "react";

export default function useOutsideClick(
	ref: React.RefObject<HTMLElement | null>,
	handler: (event: MouseEvent | TouchEvent) => void
) {
	useEffect(() => {
		function listener(event: MouseEvent | TouchEvent) {
			// If there's no ref or the click is inside the referenced element, do nothing
			if (!ref.current || ref.current.contains(event.target as Node)) {
				return;
			}

			// Otherwise, run the provided handler
			handler(event);
		}

		// Listen for mouse and touch events on the entire document
		document.addEventListener("mousedown", listener);
		document.addEventListener("touchstart", listener);

		// Cleanup on unmount or dependency change
		return () => {
			document.removeEventListener("mousedown", listener);
			document.removeEventListener("touchstart", listener);
		};
	}, [ref, handler]);
}
