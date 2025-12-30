export type PostSearch = {
	searchString: string;
	userEmail: string;
	page: number;
	pageSize: number;
	orderBy: string;
	orderByDirection: string;
};

export type OpenAlexSearch = PostSearch;

export type OpenAlexArticle = {
	id: string;
	title: string;
	abstract: string;
	keywords: string[];
	fwci: number;
};

type OpenAlexMetaResponseWorks = {
	count: number;
	db_response_time_ms: number;
	page: number;
	per_page: number;
	groups_count: null;
};

type PrimaryLocation = {
	id: string;
	is_oa: boolean;
};

type AuthorInformation = {
	author_position: string;
	author: {
		id: string;
		display_name: string;
		orcid: string;
	};
	instituitions: {
		id: string;
		display_name: string;
		country_code: string;
	}[];
};

type Topic = {
	id: string;
	display_name: string;
	score: number;
	subfield: {
		id: string;
		display_name: string;
	};
	field: {
		id: string;
		display_name: string;
	};
	domain: {
		id: string;
		display_name: string;
	};
};

type Keyword = {
	id: string;
	display_name: string;
	score: number;
};

type SustainableDeveloptmentGoals = {
	id: string;
	score: number;
	display_name: string;
};

export type OpenAlexAPIReponseArticle = {
	title: string;
	id: string;
	doi: string;
	publication_year: number;
	abstract: string;
	keywords: Keyword[];
	fwci: number;
	primary_location: PrimaryLocation;
	authorships: AuthorInformation[];
	cited_by_count: number;
	cited_normalized_percentile: {
		value: number;
		is_in_top_1_percent: boolean;
		is_in_top_10_percent: boolean;
	};
	topics: Topic[];
	sustainable_development_goals: SustainableDeveloptmentGoals[];
	abstract_inverted_index?: Record<string, number[]>;
};

export type OpenAlexSearchOutput = {
	totalResultsCount: number;
	page: number;
	userEmail: string;
	results: OpenAlexArticle[];
};

export type OpenAlexWorksResponse = {
	meta: OpenAlexMetaResponseWorks;
	results: OpenAlexAPIReponseArticle[];
	group_by: string[];
};
