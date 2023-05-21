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
import Form from "./Pages/Form";
import UserIdResponse from "./Pages/UseridResponse";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/responses",
		element: <SearchResponse />,
	},
	{ path: "response/:responseId", element: <Response /> },
	{ path: "/responses/all", element: <AllResponses /> },
	{ path: "/forms", element: <SearchForm /> },
	{path : "/form/:formId", element : <Form />},
	{path: "/response/user/:userid", element: <UserIdResponse />}
]);

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<QueryClientProvider client={queryClient}>
		<RouterProvider router={router} />
	</QueryClientProvider>
);

export { queryClient };
