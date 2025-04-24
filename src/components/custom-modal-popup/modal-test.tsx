import { useState } from "react";
import Modal from "./modal";

export default function ModalTest() {
	const [showModal, setShowModal] = useState<boolean>(true);

	function onClose() {
		setShowModal(false);
	}

	return (
		<div>
			<button onClick={() => setShowModal(!showModal)}>Open Modal</button>
			{showModal && <Modal onClose={onClose} />}
		</div>
	);
}
