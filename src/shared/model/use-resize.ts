import React from "react";
export const useScroll = () => {
	const [scrollStatus, setScrollStatus] = React.useState(false);

	const handleChange = () => {
		if (document.body.scrollHeight < window.scrollY + window.innerHeight + 300) {
			return setScrollStatus(true);
		}
		setScrollStatus(false);
	};
	React.useEffect(() => {
		document.addEventListener("scroll", () => handleChange());
		return document.removeEventListener("scroll", handleChange);
	}, []);

	return { scrollStatus };
};
