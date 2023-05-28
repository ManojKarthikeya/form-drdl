import React, { useState } from "react";
import QuestionCard from "../Components/QuestionCard";
import {
	AppBar,
	Button,
	Card,
	CardContent,
	IconButton,
	TextField,
	Toolbar,
	Typography,
} from "@mui/material";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import { Add, Palette, Visibility } from "@mui/icons-material";
import PrintIcon from "@mui/icons-material/Print";
import ResponseValidation from "../Components/ResponseValidation";
import { useMutation } from "react-query";
import axiosInstance from "../Helpers/axios";
import { CREATE_FROM } from "../Helpers/url_helper";
import { useLocation } from "react-router-dom";
import StylingDrawer from "../Components/StylingDrawer";

export default function CreateForm() {
	const templateFormdata = useLocation();
	const mutation = useMutation("form", (newForm) =>
		axiosInstance.post(CREATE_FROM, newForm)
	);
	const [formName, setFormName] = useState(
		templateFormdata.state
			? templateFormdata.state.form.name
			: "Untitled Form"
	);
	const [formDescription, setFormDescription] = useState(
		templateFormdata.state ? templateFormdata.state.form.description : ""
	);
	const [formFields, setFormFields] = useState(
		templateFormdata.state
			? templateFormdata.state.form.fields.map((item) => ({
					...item,
					id: Date.now() * Math.random(),
			  }))
			: [
					{
						id: Date.now() * Math.random(),
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
						subQuestion: false,
					},
			  ]
	);
	const [selected, setSelected] = useState([]);
	const [showStylingDrawer, setShowStylingDrawer] = useState(false);

	const handleSettingsClick = (id, subQuestion) => {};

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
					<IconButton
						onClick={() => {
							setShowStylingDrawer(!showStylingDrawer);
						}}
					>
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
					<Button
						sx={{ borderColor: "white", color: "white" }}
						onClick={() => {
							if (formName && formDescription) {
								mutation.mutate({
									name: formName,
									description: formDescription,
									fields: formFields,
								});
							}
						}}
					>
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
									id: Date.now() * Math.random(),
									type: "standard",
									question: "",
									isRequired: "false",
									questionStyles: {
										fontSize: 16,
										underlined: false,
										italic: false,
										bold: false,
										color: "black",
										fontFamily: "'Roboto', sans-serif",
									},
									responseStyles: {
										fontSize: 16,
										underlined: false,
										italic: false,
										bold: false,
										fontColor: "black",
										fontFamily: `'Roboto', sans-serif`,
									},
									subQuestion: false,
								},
							]);
						}}
					>
						Add a field
					</Button>
				</div>
			</div>
			<ResponseValidation />
			<StylingDrawer
				showStylingDrawer={showStylingDrawer}
				setShowStylingDrawer={setShowStylingDrawer}
				selected={selected}
				setSelected={setSelected}
				setFormFields={setFormFields}
			/>
		</div>
	);
}
