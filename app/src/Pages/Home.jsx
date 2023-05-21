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
				style={{marginRight: "7px"}}
			>
				View Form Responses
			</Button>
			<Button
				variant="outlined"
				onClick={() => {
					navigate("/forms");
				}}
			>
				Fill a form
			</Button>
		</div>
	);
}
