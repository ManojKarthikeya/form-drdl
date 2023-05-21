import React, { useState } from "react";
import CustomInput from "../Components/CustomInput";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axiosInstance from "../Helpers/axios";
import { GET_FORM } from "../Helpers/url_helper";
import { TextField } from "@mui/material";

export default function Form() {
	const { formId } = useParams();
	const [inputs, setInputs] = useState({});
	const res = useQuery(["formId"], () =>
		axiosInstance(`${GET_FORM}${formId}`).then((res) => res.data)
	);
	if (res.status === "loading") {
		return <div>Loading...</div>;
	}
	return (
		<React.Fragment>
			<h3 style={{ fontFamily: "'Roboto', sans-serif" }}>
				{res.data.name}
			</h3>
			{res.data.fields.map((field, index) => (
				<div key={index}>
					<TextField label={field.key} style={{margin : "10px"}} />
				</div>
			))}
		</React.Fragment>
	);
}
