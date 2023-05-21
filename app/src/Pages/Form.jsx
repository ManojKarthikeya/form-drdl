import React, { useEffect, useState } from "react";
import CustomInput from "../Components/CustomInput";
import { useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";
import axiosInstance from "../Helpers/axios";
import { CREATE_RESPONSE, GET_FORM } from "../Helpers/url_helper";
import {
	Button,
	Card,
	CardActions,
	CardContent,
	TextField,
	Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";

export default function Form() {
	const { formId } = useParams();
	const res = useQuery(["formId"], () =>
		axiosInstance(`${GET_FORM}${formId}`).then((res) => res.data)
	);
	const [inputs, setInputs] = useState([]);
	const [pop, setPop] = useState(-1);
	useEffect(() => {
		if (res.data && inputs.length === 0) {
			setInputs([
				{ key: "userId", index: -1 },
				...res.data.fields.map((item, index) => {
					return { ...item, index: index };
				}),
			]);
		}
	});
	const mutation = useMutation("responses", (newResponse) =>
		axiosInstance.post(CREATE_RESPONSE, newResponse)
	);
	console.log(inputs);
	if (res.status === "loading") {
		return <div>Loading...</div>;
	}
	return (
		<React.Fragment>
			<h2 style={{ fontFamily: "'Roboto', sans-serif", margin: "10px" }}>
				{res.data.name}
			</h2>
			{inputs.map((field, index) => (
				<Card
					sx={{ maxWidth: 600, margin: "10px" }}
					variant="outlined"
					key={index}
				>
					<CardContent>
						<div
							style={{ display: "flex", flexDirection: "column" }}
						>
							<div
								style={{
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
								}}
							>
								<div>
									<TextField
										disabled={field.key === "userId"}
										variant="standard"
										InputProps={{
											disableUnderline: true,
										}}
										value={field.key}
										onChange={(event) => {
											inputs[index].key =
												event.target.value;
											setInputs([...inputs]);
										}}
									/>
								</div>
								{field.key !== "userId" ? (
									<CloseIcon
										style={{
											alignSelf: "flex-end",
											color: "grey",
										}}
										onClick={() => {
											setInputs(
												inputs.filter(
													(ins) =>
														ins.index !==
														field.index
												)
											);
										}}
									/>
								) : null}
							</div>
							<div>
								<TextField
									variant="standard"
									style={{ width: "70%" }}
									value={field.value}
									onChange={(event) => {
										inputs[index].value =
											event.target.value;
										setInputs([...inputs]);
									}}
								/>
							</div>
						</div>
					</CardContent>
				</Card>
			))}
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					maxWidth: 620,
				}}
			>
				<Button
					style={{ margin: "10px" }}
					onClick={() => {
						setInputs([
							...inputs,
							{
								key: "New Field",
								index: inputs[inputs.length - 1].index + 1,
							},
						]);
					}}
				>
					Create Another field
				</Button>
				<Button
					style={{ margin: "10px" }}
					variant="outlined"
					onClick={() => {
						mutation.mutate({
							userId: inputs[0].value,
							formName: res.data.name,
							formId: res.data._id,
							fields: inputs
								.filter((item) => item.key !== "userId")
								.map((item) => ({
									key: item.key,
									value: item.value,
									keyStyles: item.keyStyles,
									valueStyles: item.valueStyles,
								})),
						});
					}}
				>
					Submit
				</Button>
			</div>
		</React.Fragment>
	);
}
