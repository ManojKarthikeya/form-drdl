import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import axiosInstance from "../Helpers/axios";
import { CREATE_RESPONSE, GET_FORM } from "../Helpers/url_helper";
import { InsertDriveFile, Print, Visibility } from "@mui/icons-material";
import ResponseCard from "../Components/ResponseCard";
import {
	Alert,
	AppBar,
	Button,
	Card,
	CardContent,
	CircularProgress,
	Container,
	IconButton,
	Snackbar,
	Toolbar,
	Typography,
} from "@mui/material";

export default function FillForm() {
	const { formId } = useParams();
	const navigate = useNavigate();
	const [formFields, setFormFields] = useState([]);
	const [snackbar, setSnackBar] = useState({ open: false, success: false });
	const { data: formData, status: formStatus } = useQuery(
		[formId],
		() => axiosInstance(`${GET_FORM}${formId}`).then((res) => res.data),
		{
			onSuccess: (result) => {
				setFormFields(result.fields);
			},
		}
	);

	const mutation = useMutation("responses", (newResponse) =>
		axiosInstance.post(CREATE_RESPONSE, newResponse)
	);

	if (formStatus === "loading") {
		return (
			<div
				style={{
					position: "absolute",
					left: "50%",
					top: "50%",
					transform: "translate(-50%, -50%)",
				}}
			>
				<CircularProgress />
			</div>
		);
	}
	return (
		<div style={{ marginTop: "65px" }}>
			<AppBar position="fixed" elevation={2} color="primary">
				<Toolbar>
					<InsertDriveFile
						sx={{ fontSize: "26px", marginRight: "10px" }}
					/>
					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 1 }}
					>
						{formData.name}
					</Typography>
					<IconButton>
						<Visibility
							style={{ fontSize: "28px", color: "white" }}
							color="white"
						/>
					</IconButton>
					<IconButton>
						<Print
							style={{ fontSize: "28px", color: "white" }}
							color="white"
						/>
					</IconButton>
					<Button
						sx={{ borderColor: "white", color: "white" }}
						onClick={() => {
							mutation.mutate(
								{
									userId: 123,
									formId: formData._id,
									fields: formFields.map((item) => ({
										question: item.question,
										response: item.response,
										subQuestion: item.subQuestion,
									})),
								},
								{
									onSuccess: (data) => {
										setSnackBar({
											...snackbar,
											show: true,
											success: true,
										});
										navigate(`/response/${data.data._id}`);
									},
								}
							);
						}}
					>
						Submit
					</Button>
				</Toolbar>
			</AppBar>
			<Container
				maxWidth="md"
				style={{
					display: "flex",
					flexDirection: "column"
				}}
			>
				<Card
					variant="outlined"
					style={{
						borderLeft: "6px solid #1976d2",
						marginTop: "10px",
						marginBottom: "10px",
						width: "100%",
					}}
				>
					<CardContent style={{ paddingLeft: "15px" }}>
						<Typography variant="h2">{formData.name}</Typography>
						{formData.description ? (
							<Typography variant="body2">
								{formData.description}
							</Typography>
						) : null}
					</CardContent>
				</Card>
				{formFields.map((questionEntry, index) => {
					return (
						<ResponseCard
							key={index}
							questionEntry={questionEntry}
							setQuestionEntries={setFormFields}
						/>
					);
				})}
			</Container>
			<Snackbar
				open={snackbar.open}
				onClose={(event, reason) => {
					if (reason === "clickaway") {
						return;
					}
					setSnackBar({ ...snackbar, open: false });
				}}
				autoHideDuration={3000}
			>
				{snackbar.success ? (
					<Alert severity="success" sx={{ width: "100%" }}>
						This is a success message!
					</Alert>
				) : (
					<Alert severity="error">This is an error message!</Alert>
				)}
			</Snackbar>
		</div>
	);
}
