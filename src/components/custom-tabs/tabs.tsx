import { ReactNode, useState } from "react";
import "./styles.css";

interface TabContent {
	label: string;
	content: string | ReactNode;
}

interface TabProps {
	tabsContent: TabContent[];
	onChange: (index: number) => void;
}

export default function Tabs({ tabsContent, onChange }: TabProps) {
	const [currentTabIndex, setCurrentTagIndex] = useState<number>(0);

	function handleOnClick(getCurrentIndex: number) {
		setCurrentTagIndex(getCurrentIndex);
		onChange(getCurrentIndex);
	}

	return (
		<div className="wrapper">
			<div className="heading">
				{tabsContent.map((tabItem: TabContent, index: number) => (
					<div
						className={`tab-item ${currentTabIndex === index ? "active" : ""}`}
						onClick={() => handleOnClick(index)}
						key={tabItem.label}
					>
						<span className="label">{tabItem.label}</span>
					</div>
				))}
			</div>
			<div className="content" style={{ color: "red" }}>
				{tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
			</div>
		</div>
	);
}
