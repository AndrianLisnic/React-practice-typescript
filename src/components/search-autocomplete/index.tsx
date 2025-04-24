import React, { useEffect, useState } from "react";
import Suggesstions from "./suggesstions";

interface UserItem {
	firstName: string;
}

export default function SearchAutocomplete() {
	const [loading, setLoading] = useState<boolean>(false);
	const [users, setUsers] = useState<string[]>([]);
	const [error, setError] = useState<string>("");
	const [searchParam, setSearchParam] = useState<string>("");
	const [showDropdown, setShowDropdown] = useState<boolean>(false);
	const [filteredUsers, setFilteredUsers] = useState<string[]>([]);

	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		const query: string = event.target.value.toLowerCase();
		setSearchParam(query);

		if (query.length > 1) {
			const filteredData =
				users && users.length
					? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
					: [];

			setFilteredUsers(filteredData);
			setShowDropdown(true);
		} else {
			setShowDropdown(false);
		}
	}

	function handleClick(event: React.MouseEvent<HTMLLIElement>) {
		const target = event.target as HTMLLIElement;

		setSearchParam(target.innerText);
		setShowDropdown(false);
		setFilteredUsers([]);
	}

	async function fetchListOfUsers() {
		try {
			setLoading(true);
			const response = await fetch("https://dummyjson.com/users");
			const data = await response.json();

			if (data && data.users && data.users.length > 0) {
				setUsers(data.users.map((userItem: UserItem) => userItem.firstName));
				setLoading(false);
			}
		} catch (error) {
			if (error instanceof Error) {
				setError(error.message);
			}
			console.log(error);
			setLoading(false);
		}
	}

	useEffect(() => {
		fetchListOfUsers();
	}, []);

	return (
		<div className="search-autocomplete-container">
			{loading ? (
				<h1>Loading data, please wait</h1>
			) : (
				<input
					type="text"
					name="search-users"
					placeholder="Search Users here..."
					value={searchParam}
					onChange={handleChange}
				/>
			)}
			{showDropdown && (
				<Suggesstions handleClick={handleClick} data={filteredUsers} />
			)}
		</div>
	);
}
