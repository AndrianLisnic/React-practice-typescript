import { useEffect, useState } from "react";

export default function RandomColor() {
	const [typeOfColor, setTypeOfColor] = useState<string>("hex");
	const [color, setColor] = useState<string>("#000000");

	function handleCreateRandomHexColor() {
		const hex: (number | string)[] = [
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			"A",
			"B",
			"C",
			"D",
			"E",
			"F",
		];
		let hexColor: string = "#";

		for (let i = 0; i < 6; i++) {
			hexColor += hex[randomColorUtility(hex.length)];
		}
		setColor(hexColor);
	}

	function randomColorUtility(length: number) {
		return Math.floor(Math.random() * length);
	}

	function handleCreateRandomRgbColor() {
		const r: number = randomColorUtility(256);
		const g: number = randomColorUtility(256);
		const b: number = randomColorUtility(256);
		setColor(`rgb(${r},${g},${b})`);
	}

	useEffect(() => {
		if (typeOfColor === "hex") handleCreateRandomHexColor();
		else handleCreateRandomRgbColor();
	}, [typeOfColor]);

	return (
		<div
			style={{
				width: "100vw",
				height: "100vh",
				background: color,
			}}
		>
			<button
				style={
					typeOfColor === "hex"
						? { fontWeight: "bold" }
						: { fontWeight: "normal" }
				}
				onClick={() => setTypeOfColor("hex")}
			>
				HEX Color
			</button>
			<button
				style={
					typeOfColor === "rgb"
						? { fontWeight: "bold" }
						: { fontWeight: "normal" }
				}
				onClick={() => setTypeOfColor("rgb")}
			>
				RGB Color
			</button>
			<button
				onClick={
					typeOfColor === "hex"
						? handleCreateRandomHexColor
						: handleCreateRandomRgbColor
				}
			>
				Generate Random Color
			</button>

			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					color: "#fff",
					fontSize: "25px",
					marginTop: "50px",
				}}
			>
				<h3>{typeOfColor === "hex" ? "HEX Color" : "RGB Color"}</h3>
				<h1>{color}</h1>
			</div>
		</div>
	);
}
