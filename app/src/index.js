import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import SearchResponse from "./Pages/SearchResponse";
import Response from "./Pages/Response";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { QueryClient, QueryClientProvider } from "react-query";
import AllResponses from "./Pages/AllResponses";
import SearchForm from "./Pages/SearchForm";
import UserIdResponse from "./Pages/UseridResponse";
import Login from "./Pages/Login";
import CreateForm from "./Pages/CreateForm";
import FillForm from "./Pages/FillForm";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Login />,
	},
	{
		path: "/home",
		element: <Home />,
	},
	{
		path: "/responses",
		element: <SearchResponse />,
	},
	{ path: "response/:responseId", element: <Response /> },
	{ path: "/responses/all", element: <AllResponses /> },
	{ path: "/forms", element: <SearchForm /> },
	{ path: "/form/:formId", element: <FillForm /> },
	{ path: "/response/user/:userid", element: <UserIdResponse /> },
	{ path: "/form/create", element: <CreateForm /> },
]);

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<QueryClientProvider client={queryClient}>
		<RouterProvider router={router} />
	</QueryClientProvider>
);
