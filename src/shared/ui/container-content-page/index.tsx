import { ReactElement } from "react";

type ContainerContentPage = {
	children: ReactElement | ReactElement[];
};

export const ContainerContentPage = ({ children }: ContainerContentPage) => {
	return <div className="container mx-auto px-4">{children}</div>;
};
