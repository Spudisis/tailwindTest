import { ReactElement } from "react";
type GridItemWrapper = {
	children: ReactElement;
};
export const GridItemWrapper = ({ children }: GridItemWrapper) => {
	return (
		<div className="rounded-lg w-full h-full overflow-hidden max-w-xs transition  hover:scale-110 sm:max-w-none">
			{children}
		</div>
	);
};
