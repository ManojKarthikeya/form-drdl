import React, { useMemo, useRef } from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useQuery } from "react-query";
import {
	AppBar,
	CircularProgress,
	Container,
	IconButton,
	Toolbar,
} from "@mui/material";
import { InsertDriveFile, Print } from "@mui/icons-material";
import ResponseCompleteCard from "../Components/ResponseCompleteCard";
import { FIND_RESPONSE_BY_ID, GET_FORM } from "../Helpers/url_helper";
import axiosInstance from "../Helpers/axios";
import ReactToPrint from "react-to-print";

export default function Response() {
	let ResponseRef = useRef(null);
	const { responseId } = useParams();
	const { data: responseData, status: responseStatus } = useQuery(
		["responses", responseId],
		() =>
			axiosInstance(`${FIND_RESPONSE_BY_ID}${responseId}`).then(
				(res) => res.data
			)
	);
	const formId = responseData?.formId;
	const { data: formData, status: formStatus } = useQuery(
		["forms", formId],
		() => axiosInstance(`${GET_FORM}${formId}`).then((res) => res.data),
		{ enabled: !!formId }
	);
	const responseFields = useMemo(() => {
		if (
			responseData &&
			formData &&
			formData.fields &&
			responseData.fields
		) {
			return formData.fields.map((field, index) => ({
				...field,
				response: responseData.fields[index].response,
				subQuestion: field.subQuestion
					? {
							...field.subQuestion,
							response:
								responseData.fields[index].subQuestion.response,
					  }
					: false,
			}));
		}
		return [];
	}, [responseData, formData]);

	if (responseStatus === "loading" || formStatus === "loading") {
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
			<AppBar position="fixed" elevation={1} color="primary">
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
						<ReactToPrint
							trigger={() => (
								<Print
									style={{ fontSize: "28px", color: "white" }}
									color="white"
								/>
							)}
							content={() => ResponseRef}
						/>
					</IconButton>
				</Toolbar>
			</AppBar>
			<Container
				maxWidth="md"
				ref={(element) => (ResponseRef = element)}
				style={{
					display: "flex",
					flexDirection: "column",
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
					<CardContent style={{ paddingLeft: "20px" }}>
						<Typography variant="h3">{formData.name}</Typography>
						<Typography>{formData.description}</Typography>
					</CardContent>
				</Card>
				{responseFields.map((field, index) => (
					<ResponseCompleteCard questionEntry={field} key={index} />
				))}
				<Typography align="right" style={{color : "grey"}}>
					Reponse id: {responseData._id}
				</Typography>
			</Container>
		</div>
	);
}
