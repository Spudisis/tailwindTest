export type ImagesItem = {
	jpg: {
		image_url: "string";
		small_image_url: "string";
		large_image_url: "string";
	};
	webp: {
		image_url: "string";
		small_image_url: "string";
		large_image_url: "string";
	};
};

export type AnimeItem = {
	mal_id: 0;
	url: "string";
	images: ImagesItem;
	trailer: {
		youtube_id: "string";
		url: "string";
		embed_url: "string";
	};
	approved: true;
	titles: [
		{
			type: "string";
			title: "string";
		}
	];
	title: "string";
	title_english: "string";
	title_japanese: "string";
	title_synonyms: ["string"];
	type: "TV";
	source: "string";
	episodes: 0;
	status: "Finished Airing";
	airing: true;
	aired: {
		from: "string";
		to: "string";
		prop: {
			from: {
				day: 0;
				month: 0;
				year: 0;
			};
			to: {
				day: 0;
				month: 0;
				year: 0;
			};
			string: "string";
		};
	};
	duration: "string";
	rating: "G - All Ages";
	score: 0;
	scored_by: 0;
	rank: 0;
	popularity: 0;
	members: 0;
	favorites: 0;
	synopsis: "string";
	background: "string";
	season: "summer";
	year: 0;
	broadcast: {
		day: "string";
		time: "string";
		timezone: "string";
		string: "string";
	};
	producers: [
		{
			mal_id: 0;
			type: "string";
			name: "string";
			url: "string";
		}
	];
	licensors: [
		{
			mal_id: 0;
			type: "string";
			name: "string";
			url: "string";
		}
	];
	studios: [
		{
			mal_id: 0;
			type: "string";
			name: "string";
			url: "string";
		}
	];
	genres: [
		{
			mal_id: 0;
			type: "string";
			name: "string";
			url: "string";
		}
	];
	explicit_genres: [
		{
			mal_id: 0;
			type: "string";
			name: "string";
			url: "string";
		}
	];
	themes: [
		{
			mal_id: 0;
			type: "string";
			name: "string";
			url: "string";
		}
	];
	demographics: [
		{
			mal_id: 0;
			type: "string";
			name: "string";
			url: "string";
		}
	];
};

export type MangaItem = {
	mal_id: 0;
	url: "string";
	images: ImagesItem;
	approved: true;
	titles: [
		{
			type: "string";
			title: "string";
		}
	];
	title: "string";
	title_english: "string";
	title_japanese: "string";
	type: "Manga";
	chapters: 0;
	volumes: 0;
	status: "Finished";
	publishing: true;
	published: {
		from: "string";
		to: "string";
		prop: {
			from: {
				day: 0;
				month: 0;
				year: 0;
			};
			to: {
				day: 0;
				month: 0;
				year: 0;
			};
			string: "string";
		};
	};
	score: 0;
	scored_by: 0;
	rank: 0;
	popularity: 0;
	members: 0;
	favorites: 0;
	synopsis: "string";
	background: "string";
	authors: [
		{
			mal_id: 0;
			type: "string";
			name: "string";
			url: "string";
		}
	];
	serializations: [
		{
			mal_id: 0;
			type: "string";
			name: "string";
			url: "string";
		}
	];
	genres: [
		{
			mal_id: 0;
			type: "string";
			name: "string";
			url: "string";
		}
	];
	explicit_genres: [
		{
			mal_id: 0;
			type: "string";
			name: "string";
			url: "string";
		}
	];
	themes: [
		{
			mal_id: 0;
			type: "string";
			name: "string";
			url: "string";
		}
	];
	demographics: [
		{
			mal_id: 0;
			type: "string";
			name: "string";
			url: "string";
		}
	];
};

export type Pagination = {
	last_visible_page: number;
	has_next_page: boolean;
	items: {
		count: number;
		total: number;
		per_page: number;
	};
};

export type GetAnimeSearch = {
	data: AnimeItem[];
	pagination: Pagination;
};

export type GetMangaSearch = {
	data: MangaItem[];
	pagination: Pagination;
};
