import { ReactElement } from "react";
import { GridItemList } from "shared/ui/grid-item-list";

import { observer } from "mobx-react";
type TypeAnimeEntity = {
	children: ReactElement;
};

export const Anime = observer(({ children }: TypeAnimeEntity) => {
	return (
		<GridItemList>
			<>{children}</>
		</GridItemList>
	);
});
