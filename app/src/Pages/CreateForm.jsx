import React, { useState } from "react";
import QuestionCard from "../Components/QuestionCard";
import {
	AppBar,
	Button,
	Card,
	CardContent,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	IconButton,
	List,
	ListItem,
	ListItemText,
	MenuItem,
	Select,
	Switch,
	TextField,
	Toolbar,
	Typography,
} from "@mui/material";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import { Add, Palette, Visibility } from "@mui/icons-material";
import PrintIcon from "@mui/icons-material/Print";
import ResponseValidation from "../Components/ResponseValidation";

export default function CreateForm() {
	const [formName, setFormName] = useState("Untitled Form");
	const [formDescription, setFormDescription] = useState("");
	const [responseValidation, setResponseValidation] = useState({
		show: false,
		typeOfValidation: false,
		stringSelect: "email",
		numberSelect: "greater than",
		lengthSelect: "equal to",
		valdiationInput: "",
	});
	const [formFields, setFormFields] = useState([]);
	const [selected, setSelected] = useState([])
	const handleSettingsClick = () => {
		setResponseValidation({ ...responseValidation, show: true });
	};
	return (
		<div style={{ marginTop: "65px" }}>
			<AppBar position="fixed" elevation={2} color="primary">
				<Toolbar>
					<InsertDriveFileIcon
						sx={{ fontSize: "26px", marginRight: "10px" }}
					/>
					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 1 }}
					>
						{formName}
					</Typography>
					<IconButton>
						<Palette
							style={{
								fontSize: "28px",
								color: "white",
								marginRight: "3px",
							}}
							color="white"
						/>
					</IconButton>
					<IconButton>
						<Visibility
							style={{ fontSize: "28px", color: "white" }}
							color="white"
						/>
					</IconButton>
					<IconButton>
						<PrintIcon
							style={{ fontSize: "28px", color: "white" }}
							color="white"
						/>
					</IconButton>
					<Button sx={{ borderColor: "white", color: "white" }}>
						Save
					</Button>
				</Toolbar>
			</AppBar>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Card
					variant="outlined"
					style={{
						borderLeft: "6px solid #1976d2",
						margin: "10px",
						width: "902px",
					}}
				>
					<CardContent style={{ paddingRight: "40px" }}>
						<TextField
							placeholder="Form name"
							sx={{ marginLeft: "10px" }}
							margin="normal"
							fullWidth
							variant="standard"
							inputProps={{ style: { fontSize: "34px" } }}
							value={formName}
							onChange={(event) =>
								setFormName(event.target.value)
							}
						/>
						<TextField
							placeholder="Form description"
							multiline
							sx={{ marginLeft: "10px", marginRight: "15px" }}
							margin="normal"
							fullWidth
							variant="standard"
							value={formDescription}
							onChange={(event) =>
								setFormDescription(event.target.value)
							}
						/>
					</CardContent>
				</Card>
				{formFields.map((formField, index) => {
					return (
						<QuestionCard
							key={index}
							handleSettingsClick={handleSettingsClick}
							formField={formField}
							setFormFields={setFormFields}
							setSelected={setSelected}
							selected={selected}
						/>
					);
				})}
				<div style={{ width: "910px" }}>
					<Button
						startIcon={<Add />}
						onClick={() => {
							setFormFields([
								...formFields,
								{
									id: Date.now(),
									type: "standard",
									question: "",
									isRequired : "false",
									questionStyles : {
										fontSize : 16,
										underlined : false,
										italic : false,
										bold: false,
										fontColor : "black"
									},
									responseStyles : {
										fontSize : 16,
										underlined : false,
										italic : false,
										bold: false,
										fontColor : "black"
									},
									needsValidation: false,
									validation : {
										type : "",
										condition : "",
										value : ""
									},
									subQuestion : false
								},
							]);
						}}
					>
						Add a field
					</Button>
				</div>
			</div>
			<ResponseValidation
				responseValidation={responseValidation}
				setResponseValidation={setResponseValidation}
			/>
		</div>
	);
}
