import { JSX, useContext } from "react";
import Accordian from "../accordion";
import LightDarkMode from "../light-dark-mode";
import RandomColor from "../random-color";
import TicTacToe from "../tic-tac-toe";
import TreeView from "../tree-view";
import { FeatureFlagsContext } from "./context";
import menus from "../tree-view/data";

interface ComponentItem {
	key: string;
	component: JSX.Element;
}

interface FeatureFlagsContextType {
	loading: boolean;
	enabledFlags: Record<string, boolean>;
}

export default function FeatureFlags() {
	const { loading, enabledFlags } = useContext(
		FeatureFlagsContext
	) as FeatureFlagsContextType;

	const componentsToRender: ComponentItem[] = [
		{
			key: "showLightAndDarkMode",
			component: <LightDarkMode />,
		},
		{
			key: "showTicTacToeBoard",
			component: <TicTacToe />,
		},
		{
			key: "showRandomColorGenerator",
			component: <RandomColor />,
		},
		{
			key: "showAccordian",
			component: <Accordian />,
		},
		{
			key: "showTreeView",
			component: <TreeView menus={menus} />,
		},
	];

	function checkEnabledFlags(getCurrentKey: string) {
		return enabledFlags[getCurrentKey];
	}

	if (loading) return <h1>Loading data, please wait...</h1>;

	return (
		<div>
			<h1>Feature Flags</h1>
			{componentsToRender.map((componentItem) =>
				checkEnabledFlags(componentItem.key) ? componentItem.component : null
			)}
		</div>
	);
}
