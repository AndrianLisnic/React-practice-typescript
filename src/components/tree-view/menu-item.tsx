import { useState } from "react";
import MenuList from "./menu-list";
import { FaMinus, FaPlus } from "react-icons/fa";

interface ItemProps {
	item: Item;
}

interface Item {
	label: string;
	children?: Item[];
}

export default function MenuItem({ item }: ItemProps) {
	const [displayCurrentChildren, setDisplayCurrentChildren] = useState<{
		[key: string]: boolean;
	}>({});

	function handleToggleChildren(currentLabel: string) {
		setDisplayCurrentChildren({
			...displayCurrentChildren,
			[currentLabel]: !displayCurrentChildren[currentLabel],
		});
	}

	return (
		<li>
			<div className="menu-item">
				<p>{item.label}</p>
				{item && item.children && item.children.length ? (
					<span onClick={() => handleToggleChildren(item.label)}>
						{displayCurrentChildren[item.label] ? (
							<FaMinus></FaMinus>
						) : (
							<FaPlus></FaPlus>
						)}
					</span>
				) : null}
			</div>

			{item &&
			item.children &&
			item.children.length &&
			displayCurrentChildren[item.label] ? (
				<MenuList list={item.children} />
			) : null}
		</li>
	);
}
