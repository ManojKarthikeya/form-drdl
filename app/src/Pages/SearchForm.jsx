import React from "react";
import { useQuery } from "react-query";
import axiosInstance from "../Helpers/axios";
import { GET_ALL_FORMS } from "../Helpers/url_helper";
import {
	Avatar,
	IconButton,
	List,
	ListItem,
	ListItemAvatar,
	ListItemButton,
	ListItemText,
} from "@mui/material";

import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

export default function SearchForm() {
	const navigate = useNavigate();
	const { status, data, error, isFetching } = useQuery("forms", () =>
		axiosInstance.get(GET_ALL_FORMS).then((res) => res.data)
	);
	if (status === "loading") {
		return <div>Loading....</div>;
	}
	return (
		<div>
			<List>
				{data.map((form, index) => {
					const date = new Date(form.createdAt);
					return (
						<ListItem
							key={index}
							sx={{ width: "600px" }}
							secondaryAction={
								<IconButton edge="end" aria-label="delete">
									<EditIcon />
								</IconButton>
							}
						>
							<ListItemButton
								onClick={() => {
									navigate(`/form/${form._id}`);
								}}
							>
								<ListItemAvatar>
									<Avatar>
										<InsertDriveFileIcon />
									</Avatar>
								</ListItemAvatar>
								<ListItemText
									primary={form.name}
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
