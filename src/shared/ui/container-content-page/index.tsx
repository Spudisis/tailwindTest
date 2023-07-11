import { ReactElement } from "react";

type ContainerContentPage = {
	children: ReactElement | ReactElement[];
	color?: string;
	styles?: string;
};

export const ContainerContentPage = ({ children, color, styles }: ContainerContentPage) => {
	return (
		<div className={`container mx-auto px-4${color ? " " + color : ""}${styles ? " " + styles : ""}`}>{children}</div>
	);
};
