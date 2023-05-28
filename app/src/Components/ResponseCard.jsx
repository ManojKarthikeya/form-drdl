import { Card, CardContent, TextField, Typography } from "@mui/material";
import React from "react";

export default function ResponseCard({ questionEntry, setQuestionEntries }) {
	return (
		<div style={{ display: "flex", flexDirection: "row" }}>
			<Card
				variant="outlined"
				sx={{
					borderLeft: `6px solid #29b6f6`,
					flexGrow: 1,
					marginBottom: "10px",
					marginRight: questionEntry.subQuestion ? "10px" : "0px",
				}}
			>
				<CardContent
					style={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
					}}
				>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							marginLeft: "10px",
							width : "75%"
						}}
					>
						<Typography
							sx={{
								fontSize: questionEntry.questionStyles.fontSize
									? questionEntry.questionStyles.fontSize
									: 16,
								color: questionEntry.questionStyles.color
									? questionEntry.questionStyles.color
									: "black",
								fontWeight: questionEntry.questionStyles.bold
									? "bold"
									: "unset",
								textDecoration: questionEntry.questionStyles
									.underlined
									? "underline"
									: "",
								fontStyle: questionEntry.questionStyles.italic
									? "italic"
									: "normal",
								fontFamily: questionEntry.questionStyles
									.fontFamily
									? questionEntry.questionStyles.fontFamily
									: "",
							}}
							style={{ marginBottom: "5px" }}
						>
							{questionEntry.question}
						</Typography>
						<TextField
							variant="standard"
							size="small"
							placeholder="Answer"
							style={{
								marginLeft: "20px",
							}}
							multiline={questionEntry.subQuestion ? true : false}
							value={questionEntry.response}
							onChange={(event) => {
								questionEntry.response = event.target.value;
								setQuestionEntries((data) => [...data]);
							}}
							InputProps={{
								style: {
									fontSize: questionEntry.responseStyles
										.fontSize
										? questionEntry.responseStyles.fontSize
										: 16,
									color: questionEntry.responseStyles.color
										? questionEntry.responseStyles.color
										: "black",
									fontWeight: questionEntry.responseStyles
										.bold
										? "bold"
										: "unset",
									textDecoration: questionEntry.responseStyles
										.underlined
										? "underline"
										: "",
									fontStyle: questionEntry.responseStyles
										.italic
										? "italic"
										: "normal",
									fontFamily: questionEntry.responseStyles
										.fontFamily
										? questionEntry.responseStyles
												.fontFamily
										: "",
								},
							}}
						/>
					</div>
				</CardContent>
			</Card>
			{questionEntry.subQuestion ? (
				<Card
					variant="outlined"
					sx={{
						borderLeft: `6px solid #29b6f6`,
						width: "50%",
						marginBottom: "10px",
					}}
				>
					<CardContent
						style={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
						}}
					>
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								marginLeft: "10px",
								width : "70%"
							}}
						>
							<Typography
								sx={{
									fontSize:
										questionEntry.subQuestion.questionStyles
											.fontSize,
									fontWeight: questionEntry.subQuestion
										.questionStyles.bold
										? "bold"
										: "unset",
									textDecoration: questionEntry.subQuestion
										.questionStyles.underlined
										? "underline"
										: "",
									fontStyle: questionEntry.subQuestion
										.questionStyles.italic
										? "italic"
										: "normal",
									fontFamily: questionEntry.subQuestion
										.questionStyles.fontFamily
										? questionEntry.subQuestion
												.questionStyles.fontFamily
										: "",
									color: questionEntry.subQuestion
										.questionStyles.color
										? questionEntry.subQuestion
												.questionStyles.color
										: "black",
								}}
								style={{ marginBottom: "5px" }}
							>
								{questionEntry.subQuestion.question}
							</Typography>
							<TextField
								variant="standard"
								size="small"
								placeholder="Answer"
								fullWidth
								style={{
									marginLeft: "20px",
								}}
								value={questionEntry.subQuestion.response}
								onChange={(event) => {
									questionEntry.subQuestion.response =
										event.target.value;
									setQuestionEntries((data) => [...data]);
								}}
								inputProps={{
									style: {
										fontSize:
											questionEntry.subQuestion
												.responseStyles.fontSize,
										fontWeight: questionEntry.subQuestion
											.responseStyles.bold
											? "bold"
											: "unset",
										textDecoration: questionEntry
											.subQuestion.responseStyles
											.underlined
											? "underline"
											: "",
										fontStyle: questionEntry.subQuestion
											.responseStyles.italic
											? "italic"
											: "normal",
										fontFamily: questionEntry.subQuestion
											.responseStyles.fontFamily
											? questionEntry.subQuestion
													.responseStyles.fontFamily
											: "",
										color: questionEntry.subQuestion
											.responseStyles.color
											? questionEntry.subQuestion
													.responseStyles.color
											: "black",
									},
								}}
							/>
						</div>
					</CardContent>
				</Card>
			) : null}
		</div>
	);
}
