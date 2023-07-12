import { makeAutoObservable } from "mobx";
import { getAnimeList } from "../api/api";
import { AnimeItem, GetAnimeSearch } from "shared/api/types";

class AnimeStore {
	constructor() {
		makeAutoObservable(this, {}, { autoBind: true });
	}
	countPageForPaginate = 0;
	page = 1;
	limit = 20;
	type = "ALL";
	countItems: null | number = null;
	sort = "asc";
	orderBy = "ALL";
	data: null | AnimeItem[] = null;
	rating = "ALL";

	async getAnime() {
		const data = await getAnimeList(this.page, this.limit, this.type, this.sort, this.orderBy, this.rating);
		this.checkPageCount(data);
		if (data.data) {
			this.data = data.data;
		}
		return data;
	}
	async getNewPage() {
		this.changePage(this.page + 1);
		const data = await getAnimeList(this.page, this.limit, this.type, this.sort, this.orderBy, this.rating);
		this.checkPageCount(data);
		if (data.data) {
			const prevData = this.data ? [...this.data, ...data.data] : data.data;
			this.data = prevData;
		}
	}

	changeSort(sort: string) {
		this.sort = sort;
	}
	changeOrderBy(orderBy: string) {
		this.orderBy = orderBy;
	}

	checkPageCount(data: GetAnimeSearch) {
		if (data) {
			this.countPageForPaginate = data.pagination.last_visible_page;
		}
	}

	changePage(page: number) {
		this.page = page;
	}
	changeType(type: string) {
		this.changePage(1);
		this.type = type;
	}
	changeRating(rating: string) {
		this.changePage(1);
		this.rating = rating;
	}
}

export const StoreAnime = new AnimeStore();
