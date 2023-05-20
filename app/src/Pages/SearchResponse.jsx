import React, { useState } from "react";
import {
	Button,
	ButtonGroup,
	ClickAwayListener,
	Grow,
	MenuItem,
	MenuList,
	Paper,
	Popper,
	TextField,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./../Styles/home.css";

export default function SearchResponse() {
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

	const handleClick = () => {
		console.info(`You clicked ${options[selectedIndex]}`);
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
		<div className="res-search-container">
			<h4 style={{ fontFamily: "'Roboto', sans-serif" }}>
				View Form Responses
			</h4>
			<TextField
				label={labels[selectedIndex]}
				variant="outlined"
				disabled={selectedIndex === 3}
				value={selectedIndex === 3 ? "All Responses" : inputVal}
				onChange={(event) => setInputVal(event.target.value)}
				style={{ marginBottom: "25px", width: "25vw" }}
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
		</div>
	);
}
