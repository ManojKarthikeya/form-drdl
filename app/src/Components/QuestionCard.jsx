import {
	Button,
	Card,
	CardContent,
	Checkbox,
	IconButton,
	TextField,
} from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { Settings } from "@mui/icons-material";

export default function QuestionCard({
	formField,
	setFormFields,
	setSelected,
	selected,
}) {
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
							checked={selected.includes(formField.id)}
							onChange={() => {
								selected.includes(formField.id)
									? setSelected(() =>
											selected.filter(
												(id) => id !== formField.id
											)
									  )
									: setSelected([...selected, formField.id]);
							}}
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
								label="Question"
								margin="dense"
								style={{
									width: formField.subQuestion
										? "260px"
										: "335px",
									maxWidth: formField.subQuestion
										? "260px"
										: "335px",
								}}
								value={formField.question}
								onChange={(event) => {
									formField.question = event.target.value;
									setFormFields((formFields) => [
										...formFields,
									]);
								}}
								InputLabelProps={{
									style: {
										fontSize:
											formField.questionStyles.fontSize,
									},
								}}
								inputProps={{
									style: {
										fontSize:
											formField.questionStyles.fontSize,
										fontWeight: formField.questionStyles
											.bold
											? "bold"
											: "unset",
										textDecoration: formField.questionStyles
											.underlined
											? "underline"
											: "",
										fontStyle: formField.questionStyles
											.italic
											? "italic"
											: "normal",
										fontFamily: formField.questionStyles
											.fontFamily
											? formField.questionStyles
													.fontFamily
											: "",
										color: formField.questionStyles.color
											? formField.questionStyles.color
											: "black",
									},
								}}
								variant="standard"
							/>
							<TextField
								variant="standard"
								value={"Response goes here."}
								disabled={true}
								margin="dense"
								style={{
									width: formField.subQuestion
										? "230px"
										: "305px",
									marginLeft: "auto",
									maxWidth: formField.subQuestion
										? "230px"
										: "305px",
								}}
								inputProps={{
									style: {
										fontSize:
											formField.responseStyles.fontSize,
										fontWeight: formField.responseStyles
											.bold
											? "bold"
											: "unset",
										textDecoration: formField.responseStyles
											.underlined
											? "underline"
											: "",
										fontStyle: formField.responseStyles
											.italic
											? "italic"
											: "normal",
										fontFamily: formField.responseStyles
											.fontFamily
											? formField.responseStyles
													.fontFamily
											: "",
										color: formField.responseStyles.color
											? formField.responseStyles.color
											: "black",
									},
								}}
							/>
						</div>
						<div
							style={{ marginLeft: "auto", paddingLeft: "15px" }}
						>
							<IconButton>
								<Settings color="action" />
							</IconButton>
							<IconButton
								onClick={() => {
									if (formField.subQuestion) {
										setFormFields((formFields) =>
											formFields.map((item) => {
												if (item.id === formField.id) {
													return {
														...item.subQuestion,
													};
												}
												return item;
											})
										);
									} else {
										setFormFields((formFields) =>
											formFields.filter(
												(item) =>
													item.id !== formField.id
											)
										);
									}
								}}
							>
								<DeleteIcon color="action" />
							</IconButton>
						</div>
					</CardContent>
				</Card>
			</div>
			<div>
				{formField.subQuestion ? (
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
							<Checkbox
								checked={selected.includes(
									formField.subQuestion.id
								)}
								onChange={() => {
									selected.includes(formField.subQuestion.id)
										? setSelected(() =>
												selected.filter(
													(id) =>
														id !==
														formField.subQuestion.id
												)
										  )
										: setSelected([
												...selected,
												formField.subQuestion.id,
										  ]);
								}}
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
									label="Question"
									margin="dense"
									style={{ width: "260px" }}
									value={formField.subQuestion.question}
									onChange={(event) => {
										formField.subQuestion.question =
											event.target.value;
										setFormFields((formFields) => [
											...formFields,
										]);
									}}
									variant="standard"
									InputLabelProps={{
										style: {
											fontSize:
												formField.subQuestion
													.questionStyles.fontSize,
										},
									}}
									inputProps={{
										style: {
											fontSize:
												formField.subQuestion
													.questionStyles.fontSize,
											fontWeight: formField.subQuestion
												.questionStyles.bold
												? "bold"
												: "unset",
											textDecoration: formField
												.subQuestion.questionStyles
												.underlined
												? "underline"
												: "",
											fontStyle: formField.subQuestion
												.questionStyles.italic
												? "italic"
												: "normal",
											fontFamily: formField.subQuestion
												.questionStyles.fontFamily
												? formField.subQuestion
														.questionStyles
														.fontFamily
												: "",
											color: formField.subQuestion
												.questionStyles.color
												? formField.subQuestion
														.questionStyles.color
												: "black",
										},
									}}
								/>
								<TextField
									variant="standard"
									value="Response goes here."
									disabled={true}
									margin="dense"
									style={{
										width: "230px",
										marginLeft: "auto",
									}}
									inputProps={{
										style: {
											fontSize:
												formField.subQuestion
													.responseStyles.fontSize,
											fontWeight: formField.subQuestion
												.responseStyles.bold
												? "bold"
												: "unset",
											textDecoration: formField
												.subQuestion.responseStyles
												.underlined
												? "underline"
												: "",
											fontStyle: formField.subQuestion
												.responseStyles.italic
												? "italic"
												: "normal",
											fontFamily: formField.subQuestion
												.responseStyles.fontFamily
												? formField.subQuestion
														.responseStyles
														.fontFamily
												: "",
											color: formField.subQuestion
												.responseStyles.color
												? formField.subQuestion
														.responseStyles.color
												: "black",
										},
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
									<Settings color="action" />
								</IconButton>
								<IconButton
									onClick={() => {
										formField.subQuestion = false;
										setFormFields((formFields) => [
											...formFields,
										]);
									}}
								>
									<DeleteIcon color="action" />
								</IconButton>
							</div>
						</CardContent>
					</Card>
				) : (
					<Button
						startIcon={<AddIcon />}
						style={{ marginLeft: "30px", marginRight: "139px" }}
						onClick={() => {
							setFormFields((formFields) =>
								formFields.map((item) => {
									if (item.id === formField.id) {
										return {
											...item,
											subQuestion: {
												id: Date.now(),
												type: "standard",
												question: "",
												isRequired: "false",
												questionStyles: {
													fontSize: 16,
													underlined: false,
													italic: false,
													bold: false,
													color: "black",
												},
												responseStyles: {
													fontSize: 16,
													underlined: false,
													italic: false,
													bold: false,
													color: "black",
												},
											},
										};
									}
									return item;
								})
							);
						}}
					>
						Add subsequent field
					</Button>
				)}
			</div>
		</div>
	);
}
