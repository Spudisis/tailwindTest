import { ReactElement } from "react";

type Content = {
	setStatusOpen: (b: boolean) => void;
	statusOpen: boolean;
	children: ReactElement | ReactElement[];
};

export const Content = ({ setStatusOpen, statusOpen, children }: Content) => {
	return (
		<>
			<button
				className="text-white text-3xl w-full py-2 transition-all hover:bg-red-500"
				onClick={() => setStatusOpen(!statusOpen)}
			>
				Filters
			</button>
			<div className={` transition-all ${statusOpen ? "max-h-64" : "max-h-0 overflow-hidden"}`}>{children}</div>
		</>
	);
};
