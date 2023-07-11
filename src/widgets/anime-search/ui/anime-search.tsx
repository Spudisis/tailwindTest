import { StoreAnime as Store } from "entities/anime/model/store";
import { TypeFilter } from "features/filter-type";
import { observer } from "mobx-react";
import { OrderByAnimeSearch, TypesAnimeSearch } from "shared/model/constants";

import { Sort } from "features/sort";
import { FilterOrderBy } from "features/filter-order-by/ui/filter-order-by";
import { FlexStart } from "shared/ui/flex-start";

export const AnimeSearch = observer(() => {
	return (
		<FlexStart>
			<TypeFilter types={TypesAnimeSearch} activeType={Store.type} changeActiveType={Store.changeType} />
			<FilterOrderBy orderByList={OrderByAnimeSearch} value={Store.orderBy} changeValue={Store.changeOrderBy} />
			<Sort onChange={Store.changeSort} value={Store.sort} />
		</FlexStart>
	);
});
