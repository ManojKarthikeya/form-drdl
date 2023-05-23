import {
	Button,
	Card,
	CardContent,
	Checkbox,
	Grid,
	TextField,
} from "@mui/material";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import TuneIcon from "@mui/icons-material/Tune";

export default function QuestionCard() {
	const [subQuestion, setSubQuestion] = useState(false);
	const [checked, setChecked] = React.useState(true);

	const handleChange = (event) => {
		setChecked(event.target.checked);
	};
	return (
		<div style={{ display: "flex", gap: "10px" }}>
			<div style={{ width: "440px" }}>
				<Card variant="outlined">
					<CardContent
						style={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
						}}
					>
						<Checkbox
							checked={checked}
							onChange={handleChange}
							inputProps={{ "aria-label": "controlled" }}
						/>
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								marginLeft: "20px",
							}}
						>
							<TextField
								size="small"
								label="Field Name"
								margin="dense"
								style={{ width: "250px" }}
							/>
							<TextField
								variant="standard"
								value={"Response goes here."}
								disabled={true}
								margin="dense"
								style={{ width: "220px", marginLeft: "auto" }}
							/>
						</div>
						<div style={{ marginLeft: "auto" }}>
							<TuneIcon
								color="action"
								sx={{
									fontSize: 25,
									marginRight: "10px",
									cursor: "pointer",
								}}
							/>
							<DeleteIcon
								color="action"
								sx={{ fontSize: 25, cursor: "pointer" }}
							/>
						</div>
					</CardContent>
				</Card>
			</div>
			<div style={{ width: "440px" }}>
				{subQuestion ? (
					<Card variant="outlined">
						<CardContent
							style={{
								display: "flex",
								flexDirection: "row",
								alignItems: "center",
							}}
						>
							<Checkbox />
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									marginLeft: "20px",
								}}
							>
								<TextField
									size="small"
									label="Field Name"
									margin="dense"
									style={{ width: "250px" }}
								/>
								<TextField
									variant="standard"
									value={"Response goes here."}
									disabled={true}
									margin="dense"
									style={{
										width: "220px",
										marginLeft: "auto",
									}}
								/>
							</div>
							<div style={{ marginLeft: "auto" }}>
								<TuneIcon
									sx={{
										fontSize: 25,
										marginRight: "10px",
										cursor: "pointer",
									}}
									color="action"
								/>
								<DeleteIcon
									sx={{ fontSize: 25, cursor: "pointer" }}
									onClick={() => {
										setSubQuestion(false);
									}}
									color="action"
								/>
							</div>
						</CardContent>
					</Card>
				) : (
					<Button
						onClick={() => {
							setSubQuestion(true);
						}}
					>
						Add field here
					</Button>
					// <div style={{width : "420px", border : "1px solid black"}}></div>
				)}
			</div>
		</div>
	);
}
