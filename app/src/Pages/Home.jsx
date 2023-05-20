import React, { useEffect, useState } from "react";
import SplitButton from "../Components/SplitButton";
import { TextField } from "@mui/material";
import "./../Styles/home.css";

export default function Home() {
	const labels = ["Response ID", "User ID", "Form Name", ""];
	const [inputVal, setInputVal] = useState("");
	const [selected, setSelected] = useState(0);
	return (
		<div className="res-search-container">
			<h4 style={{ fontFamily: "'Roboto', sans-serif" }}>
				View Form Responses
			</h4>
			<TextField
				label={labels[selected]}
				variant="outlined"
				disabled={selected === 3}
				value={selected === 3 ? "All Responses" : inputVal}
				onChange={(event) => setInputVal(event.target.value)}
				style={{ marginBottom: "25px", width: "25vw" }}
			/>
			<br></br>
			<SplitButton
				selectedIndex={selected}
				setSelectedIndex={setSelected}
			/>
		</div>
	);
}
