import { useEffect, useState } from "react";
import User from "./user";
import "./styles.css";
import { UserDetails } from "./userDetails";

export default function GithubProfileFinder() {
	const [username, setUsername] = useState<string>("andrianlisnic");
	const [userdata, setUserData] = useState<UserDetails>();
	const [loading, setLoading] = useState<boolean>(false);

	async function fetchGithubUserData() {
		setLoading(true);
		const res = await fetch(`https://api.github.com/users/${username}`);
		const data: UserDetails = await res.json();

		if (data) {
			setUserData(data);
			setLoading(false);
			setUsername("");
		}
	}

	function handleSubmit() {
		fetchGithubUserData();
	}

	useEffect(() => {
		fetchGithubUserData();
	}, []);

	if (loading) {
		return <h1>Loading data, please wait</h1>;
	}

	return (
		<div className="github-profile-container">
			<div className="input-wrapper">
				<input
					type="text"
					name="search-by-username"
					placeholder="Search Github Username.."
					value={username}
					onChange={(event) => setUsername(event.target.value)}
				/>
				<button onClick={handleSubmit}>Search</button>
			</div>
			{userdata !== undefined ? <User user={userdata} /> : null}
		</div>
	);
}
