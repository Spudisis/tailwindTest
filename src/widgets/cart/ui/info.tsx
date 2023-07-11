import { ReactElement } from "react";

type Info = {
	children: ReactElement;
};

export const Info = ({ children }: Info) => {
	return <div className="p-1 flex-col justify-between h-30">{children}</div>;
};
