import { ReactElement } from "react";
type GridItemWrapper = {
	children: ReactElement;
};
export const GridItemWrapper = ({ children }: GridItemWrapper) => {
	return <div className="rounded-lg overflow-hidden transition  hover:scale-110 ">{children}</div>;
};
