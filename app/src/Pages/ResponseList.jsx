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
} from "./../Helpers/url_helper";

const useResponses = async () => {
	return useQuery(["responses"]);
};

// const useResponseByUserId = async (userId) => {
// 	return useQuery({
// 		queryKey: ["responses", userId],
// 		queryFn: async () => {
// 			const { data } = await axiosInstance.get(
// 				`${FIND_RESPONSES_BY_USER}${userId}`
// 			);
// 			return data;
// 		},
// 	});
// };

export default function ResponseList() {
	const queryClient = useQueryClient();
	const { status, data, error, isFetching } = useQuery("responses", () =>
		axiosInstance.get(GET_ALL_RESPONSES).then((res) => res.data)
	);
	if (status === "loading") {
		return <div>Loading...</div>;
	}
	const date = new Date("");
	return (
		<div>
			{data.map((response) => {
				const date = new Date(response.createdAt);
				return (
					<List>
						<ListItem
							sx={{ width: "600px" }}
							secondaryAction={
								<IconButton edge="end" aria-label="delete">
									<EditIcon />
								</IconButton>
							}
						>
							<ListItemButton>
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
				);
			})}
		</div>
	);
}
