import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useQuery, useQueryClient } from "react-query";
import { GET_FORM } from "../Helpers/url_helper";
import axiosInstance from "../Helpers/axios";
import {
	AppBar,
	Button,
	CircularProgress,
	IconButton,
	Toolbar,
} from "@mui/material";
import { InsertDriveFile, Print } from "@mui/icons-material";

export default function Response() {
	const data = useLocation();
	const form = useQuery([data.state.formId], () =>
		axiosInstance(`${GET_FORM}${data.state.formId}`).then((res) => res.data)
	);
	if (form.status === "loading") {
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
						{form.data.name}
					</Typography>
					<IconButton>
						<Print
							style={{ fontSize: "28px", color: "white" }}
							color="white"
						/>
					</IconButton>
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
			</div>
		</div>
	);
}
