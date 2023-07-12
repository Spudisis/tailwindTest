import { ReactElement, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Content } from "./content";

type FiltersSection = {
	children: ReactElement | ReactElement[];
};
export const FiltersSection = ({ children }: FiltersSection) => {
	const { ref, inView, entry } = useInView({
		threshold: 0,
		initialInView: true,
	});
	console.log(inView);
	const [statusOpen, setStatusOpen] = useState(false);
	return (
		<>
			<div className="bg-orange-500 border-2 border-red-500" ref={ref}>
				<Content statusOpen={statusOpen} setStatusOpen={setStatusOpen}>
					{children}
				</Content>
			</div>

			{!inView && (
				<div className="bg-orange-500 fixed top-0 left-0 w-full z-50">
					<Content statusOpen={statusOpen} setStatusOpen={setStatusOpen}>
						{children}
					</Content>
				</div>
			)}
		</>
	);
};
