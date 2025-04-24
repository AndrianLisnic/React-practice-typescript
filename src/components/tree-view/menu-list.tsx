import MenuItem from "./menu-item";
import "./styles.css";

interface IMenuItem {
	label: string;
}

interface MenuListProps {
	list: IMenuItem[];
}

export default function MenuList({ list = [] }: MenuListProps) {
	return (
		<ul className="menu-list-container">
			{list && list.length
				? list.map((listItem) => (
						<MenuItem key={listItem.label} item={listItem} />
				  ))
				: null}
		</ul>
	);
}
