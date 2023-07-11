import React from "react";

type Pagination = {
	page: number;
	changePage: (n: number) => void;
};

export const Pagination = ({ page, changePage }: Pagination) => {
	return (
		<div>
			<button></button>
			<span>{page}</span>
			<button></button>
		</div>
	);
};
