import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
	const navigate = useNavigate();
	return (
		<div>
			<Button
				variant="outlined"
				onClick={() => {
					navigate("/responses");
				}}
				style={{ marginRight: "7px" }}
			>
				View Form Responses
			</Button>
			<Button
				variant="outlined"
				onClick={() => {
					navigate("/forms");
				}}
				style={{ marginRight: "7px" }}
			>
				Fill a form
			</Button>
			<Button
				variant="outlined"
				style={{ marginRight: "7px" }}
				onClick={() => {
					navigate("/form/create");
				}}
			>
				Build a form from scratch
			</Button>
		</div>
	);
}
