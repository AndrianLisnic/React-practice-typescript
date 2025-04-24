import React, { useEffect, useState } from "react";

export default function useLocalStorage(
	key: string,
	defaultValue: string
): [string, React.Dispatch<React.SetStateAction<string>>] {
	const [value, setValue] = useState<string>(() => {
		let currentValue: string;

		try {
			currentValue = localStorage.getItem(key) || defaultValue;
		} catch (error) {
			console.log(error);
			currentValue = defaultValue;
		}

		return currentValue;
	});

	useEffect(() => {
		localStorage.setItem(key, value);
	}, [key, value]);

	return [value, setValue];
}
