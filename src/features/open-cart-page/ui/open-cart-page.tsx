import { memo } from "react";
import { Link } from "react-router-dom";
import { ImagesItem } from "shared/api/types";
import { GridItemImage } from "shared/ui/grid-item-image/grid-item";

type OpenImage = {
	src: ImagesItem;
	title: string;
	url: string;
};

export const OpenSoloPage = memo(({ src, title, url }: OpenImage) => {
	return (
		<Link to={url}>
			<GridItemImage src={src} title={title} />
		</Link>
	);
});
