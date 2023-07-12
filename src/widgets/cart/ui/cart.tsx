import { OpenSoloPage } from "features/open-cart-page/index";
import { ImagesItem } from "shared/api/types";
import { GridItemWrapper } from "shared/ui/grid-item-wrapper/grid-item-wrapper";
import { NameTitle } from "shared/ui/name-title";
import { BlockInfoFlex } from "./block-info-flex";
import { Rating } from "./rating";
import { Year } from "./year";
import { Info } from "./info";

type Cart = {
	src: ImagesItem;
	title: string;
	url: string;
	score: number;
	year: number | null;
};

export const Cart = ({ src, title, url, score, year }: Cart) => {
	return (
		<GridItemWrapper>
			<>
				<OpenSoloPage src={src} title={title} url={url} />
				<Info>
					<>
						<NameTitle title={title} />
						<BlockInfoFlex>
							<>
								<Rating rating={score} />
								<Year year={year} />
							</>
						</BlockInfoFlex>
					</>
				</Info>
			</>
		</GridItemWrapper>
	);
};
