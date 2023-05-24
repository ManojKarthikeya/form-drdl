import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	List,
	ListItem,
	ListItemText,
	MenuItem,
	Select,
	Switch,
	TextField,
} from "@mui/material";
import React, { useState } from "react";

export default function ResponseValidation({ fieldDetails, setFormFields }) {
	const [responseValidation, setResponseValidation] = useState({
		show: false,
		id: null,
		typeOfValidation: false,
		subQuestion: false,
		stringSelect: "email",
		numberSelect: "greater than",
		lengthSelect: "equal to",
		valdiationInput: "",
	});

	return (
		<Dialog
			open={responseValidation.show}
			onClose={() => {
				setResponseValidation({ ...responseValidation, show: true });
			}}
		>
			<DialogTitle>Response Validation Settings</DialogTitle>
			<DialogContent>
				<List>
					<ListItem sx={{ margin: "0px", padding: "0px" }}>
						<ListItemText
							primary="Required"
							primaryTypographyProps={{ fontWeight: 500 }}
						/>
						<Switch edge="end" />
					</ListItem>
				</List>
				<div
					style={{
						width: "300px",
						display: "flex",
						flexDirection: "column",
						gap: "12px",
					}}
				>
					<Select
						margin="dense"
						variant="standard"
						fullWidth
						value={responseValidation.typeOfValidation}
						label="Age"
						onChange={(event) => {
							setResponseValidation({
								...responseValidation,
								typeOfValidation: event.target.value,
							});
						}}
					>
						<MenuItem value={false}>No Validation</MenuItem>
						<MenuItem value={"string"}>Text</MenuItem>
						<MenuItem value={"number"}>Number</MenuItem>
						<MenuItem value={"length"}>Length</MenuItem>
					</Select>
					{responseValidation.typeOfValidation === "string" ? (
						<Select
							variant="standard"
							size="small"
							fullWidth
							value={responseValidation.stringSelect}
							onChange={(event) => {
								setResponseValidation({
									...responseValidation,
									stringSelect: event.target.value,
								});
							}}
						>
							<MenuItem value={"email"}>Email</MenuItem>
							<MenuItem value={"URL"}>URL</MenuItem>
							<MenuItem value={"contains"}>Contains</MenuItem>
						</Select>
					) : null}
					{responseValidation.typeOfValidation === "number" ? (
						<Select
							variant="standard"
							size="small"
							fullWidth
							value={responseValidation.numberSelect}
							onChange={(event) =>
								setResponseValidation({
									...responseValidation,
									numberSelect: event.target.value,
								})
							}
						>
							<MenuItem value={"greater than"}>
								Greater than
							</MenuItem>
							<MenuItem value={"smaller than"}>
								Smaller than
							</MenuItem>
							<MenuItem value={"whole number"}>
								Whole number
							</MenuItem>
						</Select>
					) : null}
					{responseValidation.typeOfValidation === "length" ? (
						<Select
							variant="standard"
							size="small"
							fullWidth
							value={responseValidation.lengthSelect}
							onChange={(event) =>
								setResponseValidation({
									...responseValidation,
									lengthSelect: event.target.value,
								})
							}
						>
							<MenuItem value={"equal to"}>Equal to</MenuItem>
							<MenuItem value={"less than"}>Less than</MenuItem>
							<MenuItem value={"more than"}>More than</MenuItem>
						</Select>
					) : null}
					{(responseValidation.typeOfValidation === "number" &&
						responseValidation.numberSelect === "whole number") ||
					(responseValidation.typeOfValidation === "string" &&
						responseValidation.stringSelect === "email") ||
					(responseValidation.typeOfValidation === "string" &&
						responseValidation.stringSelect === "URL") ||
					!responseValidation.typeOfValidation ? null : (
						<TextField
							fullWidth
							variant="standard"
							type={
								responseValidation.typeOfValidation ===
									"length" ||
								responseValidation.typeOfValidation === "number"
									? "number"
									: "text"
							}
							value={responseValidation.valdiationInput}
							size="small"
							onChange={(event) => {
								setResponseValidation({
									...responseValidation,
									valdiationInput: event.target.value,
								});
							}}
						/>
					)}
				</div>
			</DialogContent>
			<DialogActions>
				<Button
					onClick={() => {
						setResponseValidation({
							...responseValidation,
							show: false,
						});
					}}
				>
					Cancel
				</Button>
				<Button
					onClick={() => {
						setFormFields((item) => {
							if (fieldDetails.id === item.id) {
								if (fieldDetails.subQuestion) {
									return {
										...item,
										subQuestion: {
											...item.subQuestion,
											needsValidation:
												responseValidation.typeOfValidation
													? true
													: false,
											validation:
												responseValidation.typeOfValidation
													? {
															type: responseValidation.typeOfValidation,
															value: responseValidation.valdiationInput,
															condition:
																responseValidation.typeOfValidation ===
																"string"
																	? responseValidation.stringSelect
																	: responseValidation.typeOfValidation ===
																	  "number"
																	? responseValidation.numberSelect
																	: responseValidation.lengthSelect,
													  }
													: {
															type: "",
															condition: "",
															value: "",
													  },
										},
									};
								} else {
									return {
										...item,
										needsValidation:
											responseValidation.typeOfValidation
												? true
												: false,
										validation:
											responseValidation.typeOfValidation
												? {
														type: responseValidation.typeOfValidation,
														value: responseValidation.valdiationInput,
														condition:
															responseValidation.typeOfValidation ===
															"string"
																? responseValidation.stringSelect
																: responseValidation.typeOfValidation ===
																  "number"
																? responseValidation.numberSelect
																: responseValidation.lengthSelect,
												  }
												: {
														type: "",
														condition: "",
														value: "",
												  },
									};
								}
							}
							return item;
						});
					}}
				>
					Save
				</Button>
			</DialogActions>
		</Dialog>
	);
}
