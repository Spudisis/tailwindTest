import { instance } from "shared/api/instance";
import { GetAnimeSearch } from "shared/api/types";

export const getAnimeList = async (page: number, limit: number, type: string, sort: string, orderBy: string) => {
	const pageQ = page ? "?page=" + page : "";
	const limitQ = limit ? "&limit=" + limit : "";
	const typeQ = type && type !== "ALL" ? "&type=" + type : "";
	const orderByQ = orderBy && orderBy !== "ALL" ? "&order_by=" + orderBy : "";
	const sortQ = sort && orderByQ ? "&sort=" + sort : "";

	const data = await instance.get<GetAnimeSearch>(`/anime${pageQ}${limitQ}${typeQ}${orderByQ}${sortQ}`);
	return data.data;
};
