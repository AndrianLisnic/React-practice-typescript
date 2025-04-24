import "./modal.css";

interface ModalProps {
	id?: string;
	header?: string;
	body?: string;
	footer?: string;
	onClose: () => void;
}

export default function Modal({
	id,
	header,
	body,
	footer,
	onClose,
}: ModalProps) {
	return (
		<div id={id || "Modal"} className="modal">
			<div className="modal-content">
				<div className="header">
					<span onClick={onClose} className="close-modal-icon">
						&times;
					</span>
					{header ? header : "Header"}
				</div>
				<div className="body">
					{body ? body : <p>This is our modal Body</p>}
				</div>
				<div className="footer">{footer ? footer : "Footer"}</div>
			</div>
		</div>
	);
}
