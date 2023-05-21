import {
	Avatar,
	IconButton,
	List,
	ListItem,
	ListItemAvatar,
	ListItemButton,
	ListItemText,
} from "@mui/material";
import { AcUnitRounded, DeleteOutline } from "@mui/icons-material";
import React from "react";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import EditIcon from "@mui/icons-material/Edit";
import { useQuery, useQueryClient } from "react-query";
import axiosInstance from "../Helpers/axios";
import {
	FIND_RESPONSES_BY_USER,
	GET_ALL_RESPONSES,
} from "../Helpers/url_helper";
import { useNavigate, useParams } from "react-router-dom";

export default function UserIdResponse() {
	const navigate = useNavigate();
	const { userid } = useParams();
	const { status, data, error, isFetching } = useQuery(
		["responses", userid],
		() =>
			axiosInstance
				.get(`${FIND_RESPONSES_BY_USER}${userid}`)
				.then((res) => res.data)
	);
	if (status === "loading") {
		return <div>Loading...</div>;
	}
	return (
		<div>
			{data.map((response) => {
				const date = new Date(response.createdAt);
				return (
					<React.Fragment>
						<h3
							style={{
								fontFamily: "'Roboto', sans-serif",
								marginLeft: "20px",
							}}
						>
							User : {userid}
						</h3>
						<List>
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
						</List>
					</React.Fragment>
				);
			})}
		</div>
	);
}
