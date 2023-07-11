import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import React from "react";
import { NotFound } from "./not-found";
import { AnimeSection } from "./anime-section";
import { Header } from "widgets/header/ui";

export const RoutesPages = () => {
	const mainPage = localStorage.getItem("mainPage") || "/anime";
	const location = useLocation();

	React.useEffect(() => {
		const path = location.pathname;
		if (path === "/anime" || path === "/manga") {
			localStorage.setItem("mainPage", path);
		}
	}, [location]);

	return (
		<>
			<Header />
			<Routes>
				<Route path="/anime" element={<AnimeSection />}></Route>
				<Route path="/manga" element={<div>manga</div>}></Route>
				<Route path="/" element={<Navigate to={mainPage} />}></Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	);
};
