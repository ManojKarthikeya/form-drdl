import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import { CirclePicker } from "react-color";
import {
	Button,
	Divider,
	InputLabel,
	OutlinedInput,
	Select,
	ToggleButton,
	ToggleButtonGroup,
	Typography,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";

export default function StylingDrawer({
	showStylingDrawer,
	setShowStylingDrawer,
	selected,
	setSelected,
	setFormFields,
}) {
	const [labelFont, setLabelFont] = useState("");
	const [labelSize, setLabelSize] = useState("");
	const [labelFormats, setLabelFormats] = useState([]);
	const [labelColor, setLabelColor] = useState({ hex: "black" });
	const [responseFont, setResponseFont] = useState("");
	const [responseSize, setResponseSize] = useState("");
	const [responseFormats, setResponseFormats] = useState([]);
	const [responseColor, setResponseColor] = useState({ hex: "black" });
	const sizes = [14, 15, 16, 17, 18, 19, 20, 21, 22];

	const closeStyling = () => {
		setShowStylingDrawer(false);
	};

	const labelFontHandler = (event) => {
		setLabelFont(event.target.value);
	};

	const responseFontHandler = (event) => {
		setResponseFont(event.target.value);
	};

	const labelSizeHandler = (event) => {
		setLabelSize(event.target.value);
	};

	const responseSizeHandler = (event) => {
		setResponseSize(event.target.value);
	};

	const labelFormatHandler = (event, newFormats) => {
		setLabelFormats(newFormats);
	};

	const responseFormatHandler = (event, newFormats) => {
		setResponseFormats(newFormats);
	};

	const labelColorPickerHandler = (color) => {
		setLabelColor(color);
	};

	const responseColorPickerHandler = (color) => {
		setResponseColor(color);
	};

	return (
		<div>
			<Drawer
				variant="temporary"
				anchor="right"
				open={showStylingDrawer}
				onClose={closeStyling}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						minWidth: "400px",
					}}
				>
					<Typography sx={{ margin: "15px" }} variant="h6">
						Styling
					</Typography>
					<IconButton
						size="small"
						sx={{ width: 35, margin: "12px" }}
						onClick={closeStyling}
					>
						<CloseIcon />
					</IconButton>
				</div>
				<Divider />
				<div style={{ padding: "20px" }}>
					<Typography
						sx={{ marginBottom: "10px" }}
						variant="subtitle1"
					>
						Label
					</Typography>
					<FormControl>
						<InputLabel id="label-font-family">
							Font family
						</InputLabel>
						<Select
							labelId="label-font-family"
							input={<OutlinedInput label="Font family" />}
							sx={{ width: "300px" }}
							value={labelFont}
							onChange={labelFontHandler}
						>
							<MenuItem value="roboto">Roboto</MenuItem>
							<MenuItem value="georgia">Georgia</MenuItem>
							<MenuItem value="times">Times New Roman</MenuItem>
						</Select>
					</FormControl>
					<FormControl>
						<InputLabel id="label-font-size">Font size</InputLabel>
						<Select
							labelId="label-font-size"
							input={<OutlinedInput label="Font size" />}
							sx={{ width: "115px" }}
							value={labelSize}
							onChange={labelSizeHandler}
						>
							{sizes.map((size, index) => {
								return (
									<MenuItem key={index} value={size}>
										{size}
									</MenuItem>
								);
							})}
						</Select>
					</FormControl>
				</div>
				<div
					style={{
						paddingLeft: "20px",
						paddingBottom: "20px",
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-evenly",
					}}
				>
					<ToggleButtonGroup
						value={labelFormats}
						onChange={labelFormatHandler}
					>
						<ToggleButton value="bold">
							<FormatBoldIcon />
						</ToggleButton>
						<ToggleButton value="italic">
							<FormatItalicIcon />
						</ToggleButton>
						<ToggleButton
							value="underlined"
							style={{ marginRight: "10px" }}
						>
							<FormatUnderlinedIcon />
						</ToggleButton>
					</ToggleButtonGroup>
					<CirclePicker
						colors={[
							"#010000",
							"#6a6161",
							"#878e98",
							"#b70d2a",
							"#1b62ae",
						]}
						onChange={labelColorPickerHandler}
						color={labelColor}
					/>
				</div>
				<div style={{ padding: "20px" }}>
					<Typography
						sx={{ marginBottom: "10px" }}
						variant="subtitle1"
					>
						Response
					</Typography>
					<FormControl>
						<InputLabel id="response-font-family">
							Font family
						</InputLabel>
						<Select
							labelId="response-font-family"
							input={<OutlinedInput label="Font family" />}
							sx={{ width: "300px" }}
							value={responseFont}
							onChange={responseFontHandler}
						>
							<MenuItem value="roboto">Roboto</MenuItem>
							<MenuItem value="georgia">Georgia</MenuItem>
							<MenuItem value="times">Times New Roman</MenuItem>
						</Select>
					</FormControl>
					<FormControl>
						<InputLabel id="response-font-size">
							Font size
						</InputLabel>
						<Select
							labelId="response-font-size"
							input={<OutlinedInput label="Font size" />}
							sx={{ width: "115px" }}
							value={responseSize}
							onChange={responseSizeHandler}
						>
							{sizes.map((size, index) => {
								return (
									<MenuItem key={index} value={size}>
										{size}
									</MenuItem>
								);
							})}
						</Select>
					</FormControl>
				</div>
				<div
					style={{
						paddingLeft: "20px",
						paddingBottom: "20px",
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-evenly",
					}}
				>
					<ToggleButtonGroup
						value={responseFormats}
						onChange={responseFormatHandler}
					>
						<ToggleButton value="bold">
							<FormatBoldIcon />
						</ToggleButton>
						<ToggleButton value="italic">
							<FormatItalicIcon />
						</ToggleButton>
						<ToggleButton
							value="underlined"
							style={{ marginRight: "10px" }}
						>
							<FormatUnderlinedIcon />
						</ToggleButton>
					</ToggleButtonGroup>
					<CirclePicker
						colors={[
							"#010000",
							"#6a6161",
							"#878e98",
							"#b70d2a",
							"#1b62ae",
						]}
						color={responseColor}
						onChange={responseColorPickerHandler}
					/>
				</div>
				<Divider />
				<div
					style={{
						display: "flex",
						flexDirection: "row-reverse",
						justifyContent: "flex-start",
						marginTop: "auto",
					}}
				>
					<Button
						onClick={() => {
							setFormFields((formFields) =>
								formFields.map((formField) => {
									if (
										selected.includes(formField.id) &&
										formField.subQuestion &&
										selected.includes(
											formField.subQuestion.id
										)
									) {
										return {
											...formField,
											questionStyles: {
												fontSize: labelSize
													? labelSize
													: "16",
												underlined:
													labelFormats.includes(
														"underlined"
													),
												italic: labelFormats.includes(
													"italic"
												),
												bold: labelFormats.includes(
													"bold"
												),
												fontFamily: labelFont
													? labelFont
													: "'Roboto', sans-serif",
												color: labelColor.hex
													? labelColor.hex
													: "black",
											},
											responseStyles: {
												fontSize: responseSize
													? responseSize
													: "16",
												underlined:
													responseFormats.includes(
														"underlined"
													),
												italic: responseFormats.includes(
													"italic"
												),
												bold: responseFormats.includes(
													"bold"
												),
												fontFamily: responseFont
													? responseFont
													: "'Roboto', sans-serif",
												color: responseColor.hex,
											},
											subQuestion: {
												...formField.subQuestion,
												questionStyles: {
													fontSize: labelSize
														? labelSize
														: "16",
													underlined:
														labelFormats.includes(
															"underlined"
														),
													italic: labelFormats.includes(
														"italic"
													),
													bold: labelFormats.includes(
														"bold"
													),
													fontFamily: labelFont
														? labelFont
														: "'Roboto', sans-serif",
													color: labelColor.hex
														? labelColor.hex
														: "black",
												},
												responseStyles: {
													fontSize: responseSize
														? responseSize
														: "16",
													underlined:
														responseFormats.includes(
															"underlined"
														),
													italic: responseFormats.includes(
														"italic"
													),
													bold: responseFormats.includes(
														"bold"
													),
													fontFamily: responseFont
														? responseFont
														: "'Roboto', sans-serif",
													color: responseColor.hex,
												},
											},
										};
									}
									if (selected.includes(formField.id)) {
										return {
											...formField,
											questionStyles: {
												fontSize: labelSize
													? labelSize
													: "16",
												underlined:
													labelFormats.includes(
														"underlined"
													),
												italic: labelFormats.includes(
													"italic"
												),
												bold: labelFormats.includes(
													"bold"
												),
												fontFamily: labelFont
													? labelFont
													: "'Roboto', sans-serif",
												color: labelColor.hex
													? labelColor.hex
													: "black",
											},
											responseStyles: {
												fontSize: responseSize
													? responseSize
													: "16",
												underlined:
													responseFormats.includes(
														"underlined"
													),
												italic: responseFormats.includes(
													"italic"
												),
												bold: responseFormats.includes(
													"bold"
												),
												fontFamily: responseFont
													? responseFont
													: "'Roboto', sans-serif",
												color: responseColor.hex,
											},
										};
									}
									if (
										formField.subQuestion &&
										selected.includes(
											formField.subQuestion.id
										)
									) {
										return {
											...formField,
											subQuestion: {
												...formField.subQuestion,
												questionStyles: {
													fontSize: labelSize
														? labelSize
														: "16",
													underlined:
														labelFormats.includes(
															"underlined"
														),
													italic: labelFormats.includes(
														"italic"
													),
													bold: labelFormats.includes(
														"bold"
													),
													fontFamily: labelFont
														? labelFont
														: "'Roboto', sans-serif",
													color: labelColor.hex
														? labelColor.hex
														: "black",
												},
												responseStyles: {
													fontSize: responseSize
														? responseSize
														: "16",
													underlined:
														responseFormats.includes(
															"underlined"
														),
													italic: responseFormats.includes(
														"italic"
													),
													bold: responseFormats.includes(
														"bold"
													),
													fontFamily: responseFont
														? responseFont
														: "'Roboto', sans-serif",
													color: responseColor.hex,
												},
											},
										};
									}
									return formField;
								})
							);
							setLabelFont("");
							setLabelSize("");
							setLabelFormats([]);
							setLabelColor({ hex: "black" });
							setResponseFont("");
							setResponseSize("");
							setResponseFormats([]);
							setResponseColor({ hex: "black" });
							setShowStylingDrawer(false);
						}}
					>
						Save
					</Button>
					<Button
						onClick={() => {
							setLabelFont("");
							setLabelSize("");
							setLabelFormats([]);
							setLabelColor({ hex: "black" });
							setResponseFont("");
							setResponseSize("");
							setResponseFormats([]);
							setResponseColor({ hex: "black" });
							setShowStylingDrawer(false);
						}}
					>
						Cancel
					</Button>
				</div>
			</Drawer>
		</div>
	);
}
