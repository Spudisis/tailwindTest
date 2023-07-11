import { NavLink } from "react-router-dom";
import { ContainerContentPage } from "shared/ui/container-content-page";
import { LinkStyle } from "./link-style";

export const Header = () => {
	return (
		<header className="bg-orange-500 h-16">
			<ContainerContentPage styles="flex items-center h-full text-white text-3xl">
				<LinkStyle link="/anime" label="Anime" />
				<LinkStyle link="/manga" label="Manga" />
				<LinkStyle link="/characters" label="Characters" />
			</ContainerContentPage>
		</header>
	);
};
