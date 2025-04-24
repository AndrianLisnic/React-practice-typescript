import MenuList from "./menu-list";
import { MenuItem } from "./types";

interface TreeViewProps {
	menus: MenuItem[];
}

export default function TreeView({ menus }: TreeViewProps) {
	return (
		<div className="tree-view-container">
			<MenuList list={menus} />;
		</div>
	);
}
