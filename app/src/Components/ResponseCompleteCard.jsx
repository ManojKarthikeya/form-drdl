import { Card, CardContent, TextField, Typography } from "@mui/material";
import React from "react";

export default function ResponseCompleteCard({ questionEntry }) {
	return (
		<div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
			<Card
				variant="outlined"
				sx={{
					borderLeft: `6px solid #29b6f6`,
					flexGrow: 1,
					marginBottom: "10px",
					padding: "0px",
				}}
			>
				<CardContent
					style={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						padding: "12px",
					}}
				>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							marginLeft: "5px",
						}}
					>
						<Typography
							sx={{
								marginBottom: "5px",
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
						>
							{questionEntry.question}
						</Typography>
						<Typography
							sx={{
								marginLeft: "20px",
								fontSize: questionEntry.responseStyles.fontSize
									? questionEntry.responseStyles.fontSize
									: 16,
								color: questionEntry.responseStyles.color
									? questionEntry.responseStyles.color
									: "black",
								fontWeight: questionEntry.responseStyles.bold
									? "bold"
									: "unset",
								textDecoration: questionEntry.responseStyles
									.underlined
									? "underline"
									: "",
								fontStyle: questionEntry.responseStyles.italic
									? "italic"
									: "normal",
								fontFamily: questionEntry.responseStyles
									.fontFamily
									? questionEntry.responseStyles.fontFamily
									: "",
							}}
						>
							{questionEntry.response}
						</Typography>
					</div>
				</CardContent>
			</Card>
			{questionEntry.subQuestion ? (
				<Card
					variant="outlined"
					sx={{
						borderLeft: `6px solid #29b6f6`,
						marginBottom: "10px",
						width: "50%",
						padding : "0px"
					}}
				>
					<CardContent
						style={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							padding: "12px",
						}}
					>
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								marginLeft: "5px",
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
							<Typography
								style={{
									marginLeft: "20px",
								}}
								sx={{
									fontSize:
										questionEntry.subQuestion.responseStyles
											.fontSize,
									fontWeight: questionEntry.subQuestion
										.responseStyles.bold
										? "bold"
										: "unset",
									textDecoration: questionEntry.subQuestion
										.responseStyles.underlined
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
								}}
							>
								{questionEntry.subQuestion.response}
							</Typography>
						</div>
					</CardContent>
				</Card>
			) : null}
		</div>
	);
}
