import { ReactNode } from "react";
import Tabs from "./tabs";

function RandomComponent() {
	return <p>Some random content</p>;
}

interface TabContent {
	label: string;
	content: string | ReactNode;
}

export default function TabTest() {
	const tabs: TabContent[] = [
		{
			label: "Tab 1",
			content: "This is content for Tab 1",
		},
		{
			label: "Tab 2",
			content: "This is content for Tab 2",
		},
		{
			label: "Tab 3",
			content: <RandomComponent />,
		},
	];

	function handleChange(currentTabIndex: number) {
		console.log(currentTabIndex);
	}

	return <Tabs tabsContent={tabs} onChange={handleChange} />;
}
