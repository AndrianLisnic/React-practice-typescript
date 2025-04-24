import "./styles.css";

interface SuggesstionsProps {
	data: string[];
	handleClick: (event: React.MouseEvent<HTMLLIElement>) => void;
}

export default function Suggesstions({ data, handleClick }: SuggesstionsProps) {
	return (
		<ul>
			{data && data.length
				? data.map((item, index) => (
						<li onClick={handleClick} key={index}>
							{item}
						</li>
				  ))
				: null}
		</ul>
	);
}
