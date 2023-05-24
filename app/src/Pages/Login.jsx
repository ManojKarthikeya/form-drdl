import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
	Button,
	FormControl,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
	const navigate = useNavigate();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = React.useState(false);

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				width: "400px",
				position: "absolute",
				left: "50%",
				top: "50%",
				transform: "translate(-50%,-60%)",
			}}
		>
			<img
				src="./logo.jpg"
				alt="drdo"
				width="200px"
				height="200px"
				style={{ margin: "auto" }}
			/>
			<TextField
				name="username"
				margin="normal"
				label="Username"
				value={username}
				onChange={(event) => {
					setUsername(event.target.value);
				}}
			/>
			<FormControl variant="outlined">
				<InputLabel htmlFor="outlined-adornment-password">
					Password
				</InputLabel>
				<OutlinedInput
					id="outlined-adornment-password"
					type={showPassword ? "text" : "password"}
					value={password}
					onChange={(event) => setPassword(event.target.value)}
					endAdornment={
						<InputAdornment position="end">
							<IconButton
								aria-label="toggle password visibility"
								onClick={handleClickShowPassword}
								onMouseDown={handleMouseDownPassword}
								edge="end"
							>
								{showPassword ? (
									<VisibilityOff />
								) : (
									<Visibility />
								)}
							</IconButton>
						</InputAdornment>
					}
					label="Password"
				/>
			</FormControl>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					marginTop: "8px",
				}}
			>
				<Button>Forgot Credentials?</Button>
				<Button
					onClick={() => {
						navigate("/home");
					}}
				>
					Log in
				</Button>
			</div>
		</div>
	);
}
