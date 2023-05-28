import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import axiosInstance from "../Helpers/axios";
import { CREATE_RESPONSE, GET_FORM } from "../Helpers/url_helper";
import {
	AppBar,
	Button,
	Card,
	CardContent,
	CircularProgress,
	IconButton,
	Toolbar,
	Typography,
} from "@mui/material";
import { InsertDriveFile, Print, Visibility } from "@mui/icons-material";
import ResponseCard from "../Components/ResponseCard";

export default function FillForm() {
	const { formId } = useParams();
	const [formFields, setFormFields] = useState([]);
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

	console.log(formFields);

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
							mutation.mutate({
								userId: 123,
								formId: formData._id,
								fields: formFields.map((item) => ({
									question: item.question,
									response: item.response,
									subQuestion: item.subQuestion,
								})),
							});
						}}
					>
						Submit
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
					<CardContent style={{ paddingLeft: "20px" }}>
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
			</div>
		</div>
	);
}
