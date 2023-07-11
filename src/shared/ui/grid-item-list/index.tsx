import { ReactElement } from "react";

type GridItemList = {
	styles?: "";
	children: ReactElement;
};

export const GridItemList = ({ styles, children }: GridItemList) => {
	return (
		<div className="grid gap-3 grid-cols-1 my-5 place-items-center 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
			{children}
		</div>
	);
};
