import { ReactElement } from "react";

type FlexStart = {
	children: ReactElement | ReactElement[];
};

export const FlexStart = ({ children }: FlexStart) => {
	return <div className="flex justify-start gap-2 p-2">{children}</div>;
};
