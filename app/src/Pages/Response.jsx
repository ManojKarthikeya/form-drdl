import React from "react";
import { useLocation} from "react-router-dom";

export default function Response(props) {
	const data = useLocation();
	console.log(data);
	return <div>Response</div>;
}
