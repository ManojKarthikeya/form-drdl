import React, { useState } from "react";
import QuestionCard from "../Components/QuestionCard";
import {
	AppBar,
	Button,
	Card,
	CardContent,
	IconButton,
	TextField,
	Toolbar,
	Typography,
} from "@mui/material";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import { Palette, Visibility } from "@mui/icons-material";
import PrintIcon from "@mui/icons-material/Print";

export default function CreateForm() {
	const [formName, setFormName] = useState("Untitled Form");
	const [formDescription, setFormDescription] = useState("");
	return (
		<div style={{ marginTop: "65px" }}>
			<AppBar position="fixed" elevation={2} color="primary">
				<Toolbar>
					<InsertDriveFileIcon
						sx={{ fontSize: "26px", marginRight: "10px" }}
					/>
					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 1 }}
					>
						{formName}
					</Typography>
					<IconButton>
						<Palette
							style={{
								fontSize: "28px",
								color: "white",
								marginRight: "3px",
							}}
							color="white"
						/>
					</IconButton>
					<IconButton>
						<Visibility
							style={{ fontSize: "28px", color: "white" }}
							color="white"
						/>
					</IconButton>
					<IconButton>
						<PrintIcon
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
					<CardContent style={{paddingRight : "40px"}}>
						<TextField
            placeholder="Form name"
							sx={{ marginLeft: "10px" }}
							margin="normal"
							fullWidth
							variant="standard"
							inputProps={{ style: { fontSize: "34px" } }}
							value={formName}
							onChange={(event) =>
								setFormName(event.target.value)
							}
						/>
						<TextField
            placeholder="Form description"
							multiline
							sx={{ marginLeft: "10px", marginRight: "15px" }}
							margin="normal"
							fullWidth
							variant="standard"
							value={formDescription}
							onChange={(event) =>
								setFormDescription(event.target.value)
							}
						/>
					</CardContent>
				</Card>
				<QuestionCard />
				<QuestionCard />
				<QuestionCard />
				<QuestionCard />
				<QuestionCard />
				<QuestionCard />
				<QuestionCard />
				<QuestionCard />
				<QuestionCard />
			</div>
		</div>
	);
}
