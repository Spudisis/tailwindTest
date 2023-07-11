import { ReactElement } from "react";

type ContainerContentPage = {
	children: ReactElement | ReactElement[];
	color: string;
};

export const ContainerContentPage = ({ children, color }: ContainerContentPage) => {
	return <div className={`container mx-auto px-4 ${color ? color : ""}`}>{children}</div>;
};
