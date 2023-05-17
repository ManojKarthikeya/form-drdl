import React, { useState } from "react";

export default function Home() {
	const [userId, setUserId] = useState("");
	return (
		<div>
			<h2>View Form Responses</h2>
			<input
				value={userId}
				onChange={(event) => setUserId(event.target.value)}
			/>
			<button>Search</button>
		</div>
	);
}
