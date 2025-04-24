import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordian() {
	const [selected, setSelected] = useState<string>("");
	const [enableMultiselection, setEnableMultiselection] =
		useState<boolean>(false);
	const [multiple, setMultiple] = useState<string[]>([]);

	function handleSingleSelection(id: string) {
		setSelected(id === selected ? "" : id);
	}

	function handleMultiSelection(id: string) {
		setMultiple((oldMultiple) => {
			if (oldMultiple.includes(id)) {
				return oldMultiple.filter((element) => element != id);
			} else {
				return [...oldMultiple, id];
			}
		});
	}

	return (
		<div className="wrapper">
			<button
				style={{ backgroundColor: enableMultiselection ? "green" : "red" }}
				onClick={() => {
					setEnableMultiselection(!enableMultiselection);
					setSelected("");
					setMultiple([]);
				}}
			>
				Enable Multi Selection
			</button>
			<div className="accordian">
				{data && data.length > 0 ? (
					data.map((dataItem) => (
						<div className="item">
							<div
								onClick={
									enableMultiselection
										? () => handleMultiSelection(dataItem.id)
										: () => handleSingleSelection(dataItem.id)
								}
								className="title"
							>
								<h3>{dataItem.question}</h3>
								<span>+</span>
							</div>
							{dataItem.id === selected || multiple.includes(dataItem.id) ? (
								<div className="content">{dataItem.answer}</div>
							) : null}
						</div>
					))
				) : (
					<div>No data found!</div>
				)}
			</div>
		</div>
	);
}
