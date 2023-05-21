import React from "react";
import { useParams } from "react-router-dom";

export default function Response(props) {
	const { responseId } = useParams();
	console.log(responseId);
	return <div>Response</div>;
}
