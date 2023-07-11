import { BrowserRouter } from "react-router-dom";
import "./styles/App.css";
import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { RoutesPages } from "pages/index";

const queryClient = new QueryClient();
function App() {
	return (
		<React.StrictMode>
			<QueryClientProvider client={queryClient}>
				<BrowserRouter>
					<RoutesPages />
				</BrowserRouter>
			</QueryClientProvider>
		</React.StrictMode>
	);
}

export default App;
