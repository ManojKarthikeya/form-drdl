import { CheckBox } from "@mui/icons-material";
import { Card, CardContent, Grid, TextField } from "@mui/material";
import React from "react";

export default function QuestionCard() {
	return (
		<div style={{ maxWidth: "500px" }}>
			<Card variant="outlined">
				<CardContent>
					<CheckBox />
                    <div>
                        <TextField />
                        <TextField />                                                           
                    </div>
				</CardContent>
			</Card>
		</div>
	);
}
