import React from "react";
import { useQuery } from "react-query";
import axiosInstance from "../Helpers/axios";
import { GET_ALL_FORMS } from "../Helpers/url_helper";
import {
	Avatar,
	CircularProgress,
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
import Error from "./Error";

export default function SearchForm() {
	const navigate = useNavigate();
	const { status, data, error, isFetching } = useQuery("forms", () =>
		axiosInstance.get(GET_ALL_FORMS).then((res) => res.data)
	);
	if (status === "loading") {
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

	if (error) {
		return <Error />;
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
								<IconButton
									edge="end"
									aria-label="delete"
									onClick={() => {
										navigate("/form/create", {
											state: { form },
										});
									}}
								>
									<EditIcon style={{fontSize : "28px"}} />
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
