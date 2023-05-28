import React, { useState } from "react";
import {
	Button,
	ButtonGroup,
	ClickAwayListener,
	DialogActions,
	DialogContent,
	Grow,
	MenuItem,
	MenuList,
	Paper,
	Popper,
	TextField,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import axiosInstance from "../Helpers/axios";
import { FIND_RESPONSE_BY_ID } from "../Helpers/url_helper";
import Dialog from "@mui/material/Dialog";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router";

export default function SearchResponse() {
	const navigate = useNavigate();
	const labels = ["Response ID", "User ID", "Form Name", ""];
	const options = [
		"Search by Response ID",
		"Search by User ID",
		"Search by Form Name",
		"View all Responses",
	];
	const [inputVal, setInputVal] = useState("");
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [open, setOpen] = React.useState(false);
	const anchorRef = React.useRef(null);
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	const indexDetails = ["Response id", "User id", "Form name", "Details"];

	const handleClick = async () => {
		console.info(`You clicked ${options[selectedIndex]}`);
		if (selectedIndex === 0) {
			const response = await axiosInstance.get(
				`${FIND_RESPONSE_BY_ID}${inputVal}`
			);
			if (!response.data || Object.keys(response.data).length === 0) {
				setIsDialogOpen(true);
			} else {
				navigate(`/response/${response.data._id}`, {
					state: response.data,
				});
			}
		} else if (selectedIndex === 3) {
			navigate("/responses/all");
		} else if (selectedIndex === 1) {
			navigate(`/response/user/${inputVal}`);
		}
	};
	const closeDialog = () => {
		setIsDialogOpen(false);
	};

	const handleMenuItemClick = (event, index) => {
		setSelectedIndex(index);
		setOpen(false);
	};

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	const handleClose = (event) => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return;
		}

		setOpen(false);
	};
	return (
		<div className="res-search-container" style={{ margin: "20px" }}>
			<h4 style={{ fontFamily: "'Roboto', sans-serif" }}>
				View Form Responses
			</h4>
			<TextField
				label={labels[selectedIndex]}
				variant="outlined"
				disabled={selectedIndex === 3}
				value={selectedIndex === 3 ? "All Responses" : inputVal}
				onChange={(event) => setInputVal(event.target.value)}
				style={{ marginBottom: "25px", width: "400px" }}
			/>
			<br></br>
			<ButtonGroup
				variant="contained"
				ref={anchorRef}
				aria-label="split button"
			>
				<Button onClick={handleClick}>{options[selectedIndex]}</Button>
				<Button
					size="small"
					aria-controls={open ? "split-button-menu" : undefined}
					aria-expanded={open ? "true" : undefined}
					aria-label="select merge strategy"
					aria-haspopup="menu"
					onClick={handleToggle}
				>
					<ArrowDropDownIcon />
				</Button>
			</ButtonGroup>
			<Popper
				sx={{
					zIndex: 1,
				}}
				open={open}
				anchorEl={anchorRef.current}
				role={undefined}
				transition
				disablePortal
			>
				{({ TransitionProps, placement }) => (
					<Grow
						{...TransitionProps}
						style={{
							transformOrigin:
								placement === "bottom"
									? "center top"
									: "center bottom",
						}}
					>
						<Paper>
							<ClickAwayListener onClickAway={handleClose}>
								<MenuList id="split-button-menu" autoFocusItem>
									{options.map((option, index) => (
										<MenuItem
											key={option}
											selected={index === selectedIndex}
											onClick={(event) =>
												handleMenuItemClick(
													event,
													index
												)
											}
										>
											{option}
										</MenuItem>
									))}
								</MenuList>
							</ClickAwayListener>
						</Paper>
					</Grow>
				)}
			</Popper>
			<Dialog open={isDialogOpen}>
				<DialogContent>
					<Alert severity="error">
						Invalid {indexDetails[selectedIndex]}
					</Alert>
				</DialogContent>
				<DialogActions>
					<Button onClick={closeDialog}>Close</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
