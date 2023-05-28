import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Add, InsertDriveFile, InsertDriveFileOutlined } from "@mui/icons-material";

export default function Home() {
	const navigate = useNavigate();
	return (
		<div
			style={{
				position: "absolute",
				left: "50%",
				top: "50%",
				transform: "translate(-50%, -50%)",
			}}
		>
			<Button
				variant="outlined"
				onClick={() => {
					navigate("/responses");
				}}
				style={{ marginBottom: "7px" }}
			>
				View Form Responses
			</Button>
			<br />
			<Button startIcon={<InsertDriveFileOutlined />}
				variant="outlined"
				onClick={() => {
					navigate("/forms");
				}}
				style={{ marginBottom: "7px" }}
			>
				View Forms
			</Button>
			<br />
			<Button
				startIcon={<Add />}
				variant="outlined"
				style={{ marginBottom: "7px" }}
				onClick={() => {
					navigate("/form/create");
				}}
			>
				Create form
			</Button>
		</div>
	);
}
