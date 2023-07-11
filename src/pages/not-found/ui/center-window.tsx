import { ReactElement } from "react";

type CenterWindow = {
	children: ReactElement;
};

export const CenterWindow = ({ children }: CenterWindow) => {
	return <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">{children}</div>;
};
