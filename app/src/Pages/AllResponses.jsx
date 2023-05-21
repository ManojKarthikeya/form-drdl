import {
	Avatar,
	IconButton,
	List,
	ListItem,
	ListItemAvatar,
	ListItemButton,
	ListItemText,
} from "@mui/material";
import React from "react";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import EditIcon from "@mui/icons-material/Edit";
import { useQuery, useQueryClient } from "react-query";
import axiosInstance from "../Helpers/axios";
import { GET_ALL_RESPONSES } from "../Helpers/url_helper";
import { useNavigate } from "react-router-dom";

export default function AllResponses() {
	const navigate = useNavigate();
	const { status, data, error, isFetching } = useQuery("responses", () =>
		axiosInstance.get(GET_ALL_RESPONSES).then((res) => res.data)
	);
	if (status === "loading") {
		return <div>Loading...</div>;
	}
	return (
		<div>
			<h3 style={{ fontFamily: "'Roboto', sans-serif", marginLeft : "20px" }}>
				All Responses
			</h3>
			<List>
				{data.map((response) => {
					const date = new Date(response.createdAt);
					return (
						<ListItem
							sx={{ width: "600px" }}
							secondaryAction={
								<IconButton edge="end" aria-label="delete">
									<EditIcon />
								</IconButton>
							}
						>
							<ListItemButton
								onClick={() => {
									navigate(`/response/${response._id}`, {
										state: response,
									});
								}}
							>
								<ListItemAvatar>
									<Avatar>
										<InsertDriveFileIcon />
									</Avatar>
								</ListItemAvatar>
								<ListItemText
									primary={response._id}
									secondary={`${date.getDate()}-${
										date.getUTCMonth() + 1
									}-${date.getFullYear()} - ${date.toLocaleTimeString()}`}
								/>
							</ListItemButton>
						</ListItem>
					);
				})}
			</List>
		</div>
	);
}
