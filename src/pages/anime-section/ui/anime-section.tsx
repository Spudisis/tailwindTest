import React from "react";
import { AnimeSearch } from "widgets/anime-search";
import { StoreAnime as Store } from "entities/anime/model/store";
import { observer } from "mobx-react";
import { useQuery } from "@tanstack/react-query";
import { Anime } from "entities/anime/ui/anime";
import { Cart } from "widgets/cart/ui/cart";
import { ContainerContentPage } from "shared/ui/container-content-page";
import { GridItemLoader } from "shared/ui/grid-item-loader";
import { useScroll } from "shared/model/use-resize";

export const AnimeSection = observer(() => {
	const data = Store.data;
	const { scrollStatus } = useScroll();
	const { isSuccess } = useQuery({
		queryKey: ["animeList", Store.type, Store.sort, Store.orderBy, Store.rating],
		queryFn: () => Store.getAnime(),
		refetchOnWindowFocus: false,
	});
	const emptyMas = Array(Store.limit).fill("");

	React.useEffect(() => {
		if (scrollStatus) Store.getNewPage();
	}, [scrollStatus]);

	return (
		<ContainerContentPage color="">
			<AnimeSearch />
			<Anime>
				<>
					{data && isSuccess
						? data.map((elem) => (
								<Cart
									key={elem.mal_id}
									src={elem.images}
									title={elem.title}
									url={"/anime/" + elem.mal_id}
									score={elem.score}
									year={elem.year}
								/>
						  ))
						: emptyMas.map((_, index) => <GridItemLoader key={index} />)}
				</>
			</Anime>
		</ContainerContentPage>
	);
});
