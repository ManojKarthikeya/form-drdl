import React, { useState } from "react";
import CustomInput from "../Components/CustomInput";

export default function TestCustomInput() {
	const [val, setVal] = useState("");
	return (
		<div>
			<CustomInput
				disableUnderline={false}
				textValue={val}
				textChange={(event) => setVal(event.target.value)}
			/>
		</div>
	);
}
