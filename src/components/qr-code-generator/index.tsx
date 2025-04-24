import { useState } from "react";
import QRCode from "react-qr-code";
import "./styles.css";

export default function QRCodeGenerator() {
	const [qrCode, setQrCode] = useState<string>("");
	const [input, setInput] = useState<string>("");

	function handleGenerateQrCode() {
		setQrCode(input);
		setInput("");
	}

	return (
		<div>
			<h1>QR Code Generator</h1>
			<div>
				<input
					onChange={(e) => setInput(e.target.value)}
					type="text"
					name="qr-code"
					value={input}
					placeholder="Enter your value here"
				></input>
				<button
					disabled={input && input.trim() !== "" ? false : true}
					onClick={handleGenerateQrCode}
				>
					Generate
				</button>
			</div>
			<div className="qr-code-container">
				<QRCode id="qr-code-value" value={qrCode} size={400} />
			</div>
		</div>
	);
}
