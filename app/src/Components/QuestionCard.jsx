import {
	Button,
	Card,
	CardContent,
	Checkbox,
	IconButton,
	TextField,
} from "@mui/material";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import TuneIcon from "@mui/icons-material/Tune";
import AddIcon from "@mui/icons-material/Add";

export default function QuestionCard() {
	const [questionText, setQuestionText] = useState("");
	const [subQuestion, setSubQuestion] = useState(false);
	const [subQuestionText, setSubQuestionText] = useState("");
	const [checked, setChecked] = React.useState(true);

	const handleChange = (event) => {
		setChecked(event.target.checked);
	};
	return (
		<div
			style={{
				display: "flex",
				gap: "10px",
				alignItems: "center",
				marginBottom: "10px",
			}}
		>
			<div>
				<Card
					variant="outlined"
					sx={{ borderLeft: `6px solid #29b6f6` }}
				>
					<CardContent
						style={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
						}}
					>
						<Checkbox
							sx={{ padding: "5px" }}
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
								style={{
									width: subQuestion ? "260px" : "335px",
									maxWidth: subQuestion ? "260px" : "335px",
								}}
								value={questionText}
								onChange={(event) => {
									setQuestionText(event.target.value);
								}}
								autoCapitalize="sentences"
							/>
							<TextField
								variant="standard"
								value={"Response goes here."}
								disabled={true}
								margin="dense"
								style={{
									width: subQuestion ? "230px" : "305px",
									marginLeft: "auto",
									maxWidth: subQuestion ? "230px" : "305px",
								}}
							/>
						</div>
						<div
							style={{ marginLeft: "auto", paddingLeft: "15px" }}
						>
							<IconButton>
								<TuneIcon color="action" />
							</IconButton>
							<IconButton>
								<DeleteIcon
									color="action"
									onClick={() => {
										if (subQuestion) {
											setQuestionText(subQuestionText);
											setSubQuestionText("");
											setSubQuestion(false);
										}
									}}
								/>
							</IconButton>
						</div>
					</CardContent>
				</Card>
			</div>
			<div>
				{subQuestion ? (
					<Card
						variant="outlined"
						sx={{ borderLeft: `6px solid #4fc3f7` }}
					>
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
									style={{ width: "260px" }}
									value={subQuestionText}
									onChange={(event) =>
										setSubQuestionText(event.target.value)
									}
								/>
								<TextField
									variant="standard"
									value={"Response goes here."}
									disabled={true}
									margin="dense"
									style={{
										width: "230px",
										marginLeft: "auto",
									}}
								/>
							</div>
							<div
								style={{
									marginLeft: "auto",
									paddingLeft: "10px",
									display: "flex",
								}}
							>
								<IconButton>
									<TuneIcon color="action" />
								</IconButton>
								<IconButton>
									<DeleteIcon
										onClick={() => {
											setSubQuestion(false);
										}}
										color="action"
									/>
								</IconButton>
							</div>
						</CardContent>
					</Card>
				) : (
					<Button
						startIcon={<AddIcon />}
						style={{ marginLeft: "30px",marginRight: "139px" }}
						onClick={() => {
							setSubQuestion(true);
						}}
					>
						Add subsequent field
					</Button>
				)}
			</div>
		</div>
	);
}
