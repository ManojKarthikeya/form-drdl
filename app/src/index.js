import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Form from "./Pages/Form";
import CustomInput from "./Components/CustomInput";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
