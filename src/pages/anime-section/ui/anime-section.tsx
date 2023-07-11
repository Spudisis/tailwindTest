import React from "react";
import { AnimeSearch } from "widgets/anime-search";
import { StoreAnime as Store } from "entities/anime/model/store";
import { observer } from "mobx-react";
import { useQuery } from "@tanstack/react-query";
import { Anime } from "entities/anime/ui/anime";
import { Cart } from "widgets/cart/ui/cart";
import { ContainerContentPage } from "shared/ui/container-content-page";
export const AnimeSection = observer(() => {
	const { isSuccess, data } = useQuery({
		queryKey: ["animeList", Store.type, Store.page, Store.sort, Store.orderBy],
		queryFn: () => Store.getAnime(),
		refetchOnWindowFocus: false,
	});
	return (
		<ContainerContentPage>
			<AnimeSearch />

			<Anime>
				<>
					{data && data.data ? (
						data.data.map((elem) => (
							<Cart
								key={elem.mal_id}
								src={elem.images}
								title={elem.title}
								url={"/anime/" + elem.mal_id}
								score={elem.score}
								year={elem.year}
							/>
						))
					) : (
						<div>Loading</div>
					)}
				</>
			</Anime>
		</ContainerContentPage>
	);
});
