import React, { useState } from "react";
import "./custom-input-styles.css";
import { Tooltip, styled, tooltipClasses } from "@mui/material";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import TextIncreaseIcon from "@mui/icons-material/TextIncrease";
import TextDecreaseIcon from "@mui/icons-material/TextDecrease";
import EditIcon from "@mui/icons-material/Edit";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

export default function CustomInput() {
	const [formats, setFormats] = React.useState(["bold"]);
	const [fontsize, setFontsize] = useState(16)
	const [input, setInput] = useState("");
	const handleFormat = (event, newFormats) => {
		setOpen(true);
		setFormats(newFormats);
	};
	const [open, setOpen] = React.useState(false);
	const FieldEditor = styled(({ className, ...props }) => (
		<Tooltip
			open={open}
			disableFocusListener
			disableHoverListener
			disableTouchListener
			{...props}
			classes={{ popper: className }}
			placement="bottom-end"
			title={
				<React.Fragment>
					<ToggleButtonGroup value={formats} onChange={handleFormat}>
						<ToggleButton value="bold" aria-label="bold">
							<FormatBoldIcon style={{ fontSize: 16 }} />
						</ToggleButton>
						<ToggleButton value="italic" aria-label="italic">
							<FormatItalicIcon style={{ fontSize: 16 }} />
						</ToggleButton>
						<ToggleButton
							value="underlined"
							aria-label="underlined"
						>
							<FormatUnderlinedIcon style={{ fontSize: 16 }} />
						</ToggleButton>
						<ToggleButton disabled={fontsize > 24} onClick={()=> {
							setFontsize(fontsize + 2)
						}}>
							<TextIncreaseIcon style={{ fontSize: 16 }} />
						</ToggleButton>
						<ToggleButton disabled={fontsize < 12} onClick={()=> {
							setFontsize(fontsize - 1)
						}}>
							<TextDecreaseIcon style={{ fontSize: 16 }} />
						</ToggleButton>
					</ToggleButtonGroup>
				</React.Fragment>
			}
		/>
	))(({ theme }) => ({
		[`& .${tooltipClasses.tooltip}`]: {
			backgroundColor: "white",
		},
	}));
	console.log(formats.includes("bold") ? "bold" : "");
	return (
		<React.Fragment>
			<FieldEditor>
				<input
				autoFocus
					id="standard-basic"
					variant="standard"
					value={input}
					onChange={(event) => setInput(event.target.value)}
					style={{
						fontSize : fontsize,
						fontWeight: formats.includes("bold") ? "bold" : "",
						fontStyle : formats.includes("italic") ? "italic" : "normal",
						textDecoration : formats.includes("underlined" ) ? "underline" : ""
					}}
				/>
			</FieldEditor>
			{open ? (
				<EditIcon
					onClick={() => {
						setOpen(false);
					}}
				/>
			) : (
				<EditOutlinedIcon
					onClick={() => {
						setOpen(true);
					}}
				/>
			)}
		</React.Fragment>
	);
}
