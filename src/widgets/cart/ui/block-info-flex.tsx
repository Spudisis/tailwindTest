import { ReactElement } from "react";

type BlockInfoFlex = {
	children: ReactElement;
};

export const BlockInfoFlex = ({ children }: BlockInfoFlex) => {
	return <div className="flex justify-between">{children}</div>;
};
