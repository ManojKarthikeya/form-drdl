import React, { useState } from "react";
import CustomInput from "../Components/CustomInput";

export default function Form() {
	const [fields, setFields] = useState([{}]);
	return (
		<div>
			<CustomInput />
			<CustomInput />
		</div>
	);
}
