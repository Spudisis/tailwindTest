import { NavLink } from "react-router-dom";

export type LinkStyle = {
	link: string;
	label: string;
};

export const LinkStyle = ({ link, label }: LinkStyle) => {
	return (
		<NavLink
			to={link}
			className={({ isActive }) =>
				`transition-all hover:text-gray-400 mr-4 ${isActive ? "border-b-2 border-b-red-700" : ""}`
			}
		>
			{label}
		</NavLink>
	);
};
