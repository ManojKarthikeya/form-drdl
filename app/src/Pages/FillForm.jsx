import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import axiosInstance from "../Helpers/axios";
import { CREATE_RESPONSE, GET_FORM } from "../Helpers/url_helper";
import {
	AppBar,
	Button,
	Card,
	CardContent,
	IconButton,
	Toolbar,
	Typography,
} from "@mui/material";
import { InsertDriveFile, Print, Visibility } from "@mui/icons-material";
import ResponseCard from "../Components/ResponseCard";

export default function FillForm() {
	const { formId } = useParams();
	const [formFields, setFormFields] = useState([]);
	const form = useQuery([formId], () =>
		axiosInstance(`${GET_FORM}${formId}`).then((res) => res.data)
	);
	const mutation = useMutation("responses", (newResponse) =>
		axiosInstance.post(CREATE_RESPONSE, newResponse)
	);
	useEffect(() => {
		if (form.data && formFields.length === 0) {
			setFormFields(
				form.data.fields.map((item) => ({ ...item, id: Date.now() }))
			);
		}
	}, [form, formFields]);
	if (form.status === "loading") {
		return <div>Loading...</div>;
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
						{form.data.name}
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
								formId: form.data._id,
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
						<Typography variant="h2">{form.data.name}</Typography>
						{form.data.description ? (
							<Typography variant="body2">
								{form.data.description}
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
