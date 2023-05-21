import React from "react";
import { useLocation } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function Response(props) {
	const data = useLocation();
	const date = new Date(data.state.createdAt);
	console.log(data.state);
	return (
		<div className="responseWrapper">
			<h2 style={{ fontFamily: "'Roboto', sans-serif", margin: "10px" }}>
				{data.state.formName}{" "}
				<span style={{ color: "grey" }}> - {data.state._id}</span>
			</h2>
			<h4 style={{ fontFamily: "'Roboto', sans-serif", margin: "10px" }}>
				User id :{" "}
				<span style={{ color: "grey" }}>{data.state.userId}</span>
			</h4>
			{data.state.fields.map((response) => {
				return (
					<Card
						variant="outlined"
						sx={{ maxWidth: 600, margin: "10px" }}
					>
						<CardContent>
							<Typography
								sx={
									response.keyStyles
										? {
												textDecoration: response
													.keyStyles.underlined
													? "underline"
													: "none",
												fontWeight: response.keyStyles
													.bold
													? "bold"
													: "none",
												fontSize: response.keyStyles
													.fontSize
													? response.keyStyles
															.fontSize
													: 16,
												fontStyle: response.keyStyles
													.italic
													? "italic"
													: "none",
										  }
										: {}
								}
							>
								{response.key}
								{response.required && (
									<span style={{ color: "red" }}>*</span>
								)}
							</Typography>
							<Typography
								sx={
									response.valueStyles
										? {
												textDecoration: response
													.valueStyles.underlined
													? "underline"
													: "none",
												fontWeight: response.valueStyles
													.bold
													? "bold"
													: "none",
												fontSize: response.valueStyles
													.fontSize
													? response.valueStyles
															.fontSize
													: 16,
												fontStyle: response.valueStyles
													.italic
													? "italic"
													: "none",
										  }
										: {}
								}
							>
								{response.value}
							</Typography>
						</CardContent>
					</Card>
				);
			})}
			<h4 style={{ fontFamily: "'Roboto', sans-serif", margin: "10px", color: "grey" }}>
				<div>Created at</div>
				<div>
					{date.toLocaleTimeString()} {date.getDate()}-
					{date.getMonth() + 1}-{date.getFullYear()}
				</div>
			</h4>
		</div>
	);
}

// sx={{ color: pink[500] }}
