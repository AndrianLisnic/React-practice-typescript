import { useRef, useState } from "react";
import useOutsideClick from ".";

export default function UseOnclickOutsideTest() {
	const [showContent, setShowContent] = useState<boolean>(false);
	const ref = useRef<HTMLDivElement>(null);

	useOutsideClick(ref, () => setShowContent(false));

	return (
		<div ref={ref}>
			{showContent ? (
				<div>
					<h1>This is a random content</h1>
					<p>Please click outside of this to close.</p>
				</div>
			) : (
				<button onClick={() => setShowContent(true)}>Show content</button>
			)}
		</div>
	);
}
