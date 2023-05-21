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
import Form from "./Pages/Form";
import ResponseList from "./Pages/ResponseList";
import {
	useQuery,
	useQueryClient,
	QueryClient,
	QueryClientProvider,
} from "react-query";

const router = createBrowserRouter([
	{
		path: "/",
		element: <ResponseList />,
	},
	{
		path: "/responses",
		element: <SearchResponse />,
	},
	{ path: "response/:responseId", element: <Response /> },
]);

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

export { queryClient };
