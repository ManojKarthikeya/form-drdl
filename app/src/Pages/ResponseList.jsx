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

const getFormsByUser = async () => {
	return null;
};

export default function ResponseList() {
	return (
		<div>
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
							primary="Single-line item"
							secondary="secondary"
						/>
					</ListItemButton>
				</ListItem>
			</List>
		</div>
	);
}
