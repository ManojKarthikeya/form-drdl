import React, { useState } from "react";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
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

export default function StylingDrawer({showStylingDrawer, setShowStylingDrawer, formFieldIds, setFormFields}) {
  // const [drawerOpen, setDrawerOpen] = useState(false);
  const [labelFont, setLabelFont] = useState("");
  const [labelSize, setLabelSize] = useState();
  const [labelFormats, setLabelFormats] = useState([]);
  const [labelColor, setLabelColor] = useState({ hex: "black" });
  const [responseFont, setResponseFont] = useState("");
  const [responseSize, setResponseSize] = useState();
  const [responseFormats, setResponseFormats] = useState([]);
  const [responseColor, setResponseColor] = useState({ hex: "black" });
  const sizes = [16, 17, 18, 19, 20, 21, 22, 23, 24];

  const openStyling = () => {
    setShowStylingDrawer(true);
  };
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

  const labelFormatHandler = (newFormats) => {
    setLabelFormats(newFormats);
  };

  const responseFormatHandler = (newFormats) => {
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
      {/* <IconButton onClick={openStyling}>
        <PaletteOutlinedIcon />
      </IconButton> */}
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
          <Typography sx={{ marginBottom: "10px" }} variant="subtitle1">
            Label
          </Typography>
          <FormControl>
            <InputLabel id="label-font-family">Font family</InputLabel>
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
              {sizes.map((size) => {
                return <MenuItem value={size}>{size}</MenuItem>;
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
          <ToggleButtonGroup value={labelFormats} onChange={labelFormatHandler}>
            <ToggleButton value="bold">
              <FormatBoldIcon />
            </ToggleButton>
            <ToggleButton value="italic">
              <FormatItalicIcon />
            </ToggleButton>
            <ToggleButton value="underlined" style={{ marginRight: "10px" }}>
              <FormatUnderlinedIcon />
            </ToggleButton>
          </ToggleButtonGroup>
          <CirclePicker
            colors={["#D9E3F0", "#F47373", "#697689", "#37D67A", "#2CCCE4"]}
            onChange={labelColorPickerHandler}
            color={labelColor}
          />
        </div>
        <div style={{ padding: "20px" }}>
          <Typography sx={{ marginBottom: "10px" }} variant="subtitle1">
            Response
          </Typography>
          <FormControl>
            <InputLabel id="response-font-family">Font family</InputLabel>
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
            <InputLabel id="response-font-size">Font size</InputLabel>
            <Select
              labelId="response-font-size"
              input={<OutlinedInput label="Font size" />}
              sx={{ width: "115px" }}
              value={responseSize}
              onChange={responseSizeHandler}
            >
              {sizes.map((size) => {
                return <MenuItem value={size}>{size}</MenuItem>;
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
            <ToggleButton value="underlined" style={{ marginRight: "10px" }}>
              <FormatUnderlinedIcon />
            </ToggleButton>
          </ToggleButtonGroup>
          <CirclePicker
            colors={["#D9E3F0", "#F47373", "#697689", "#37D67A", "#2CCCE4"]}
            color={responseColor}
            onChange={responseColorPickerHandler}
          />
        </div>
        <Divider />
        <div style={{ padding: "20px" }}>
          <Typography sx={{ marginBottom: "10px" }} variant="subtitle1">
            Color
          </Typography>
          <CirclePicker
            colors={["#D9E3F0", "#F47373", "#697689", "#37D67A", "#2CCCE4"]}
            onChange={labelColorPickerHandler}
          />
        </div>
        <Divider/>
        <div style={{display:"flex", flexDirection:"row-reverse", justifyContent:"flex-start", marginTop: "auto"}}>
          <Button>Save</Button>
          <Button>Cancel</Button>
        </div>
      </Drawer>
    </div>
  );
}
