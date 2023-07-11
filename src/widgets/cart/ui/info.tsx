import React, { ReactElement } from "react";

type Info = {
	children: ReactElement;
};

export const Info = ({ children }: Info) => {
	return <div className="p-1">{children}</div>;
};
