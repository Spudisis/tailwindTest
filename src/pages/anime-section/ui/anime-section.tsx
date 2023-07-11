import React from "react";
import { AnimeSearch } from "widgets/anime-search";
import { StoreAnime as Store } from "entities/anime/model/store";
import { observer } from "mobx-react";
import { useQuery } from "@tanstack/react-query";
import { Anime } from "entities/anime/ui/anime";
import { Cart } from "widgets/cart/ui/cart";
import { ContainerContentPage } from "shared/ui/container-content-page";
import { GridItemLoader } from "shared/ui/grid-item-loader";

export const AnimeSection = observer(() => {
	const { data, isError, isLoading, isSuccess } = useQuery({
		queryKey: ["animeList", Store.type, Store.page, Store.sort, Store.orderBy],
		queryFn: () => Store.getAnime(),
		refetchOnWindowFocus: false,
	});

	const emptyMas = Array(Store.limit).fill("");

	return (
		<ContainerContentPage color="">
			<AnimeSearch />

			<Anime>
				<>
					{isSuccess
						? data.data.map((elem) => (
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
