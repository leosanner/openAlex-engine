import {
	OpenAlexAPIReponseArticle,
	OpenAlexArticle,
	OpenAlexSearch,
	OpenAlexSearchOutput,
	OpenAlexWorksResponse,
} from "@/schemas/openAlex";
import { openAlexWorks } from "./openalex-routes";
import { buildSearchQueryOpenAlex, invertedIndexToAbstract } from "./utils";

// ("machine learning" OR "deep learning") AND ("enviroment impact assessment" OR "eia")

export class OpenAlexAPI {
	async searchWorksByCompleteString(
		searchObject: OpenAlexSearch
	): Promise<OpenAlexSearchOutput> {
		const searchFilter = searchObject.searchFilter
			? searchObject.searchFilter
			: "title_and_abstract";

		const searchString = `${searchFilter}.search:${searchObject.searchString}`;

		const orderDirection =
			searchObject.orderByDirection === "desc" ? ":desc" : "";

		const params = new URLSearchParams({
			filter: searchString,
			sort: `${searchObject.orderBy}${orderDirection}`,
			"per-page": String(searchObject.pageSize),
			page: String(searchObject.page),
			mailto: searchObject.userEmail,
		});

		console.log("URl do request: " + `${openAlexWorks}?${params}`);

		try {
			const response = await fetch(`${openAlexWorks}?${params}`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});

			const data = (await response.json()) as OpenAlexWorksResponse;

			if (!data) {
				return {
					totalResultsCount: 0,
					page: 0,
					userEmail: searchObject.userEmail,
					results: [],
				};
			}
			const results = data.results;
			const output: OpenAlexArticle[] = results.map((result) => {
				return {
					id: result.id,
					title: result.title,
					abstract: result.abstract_inverted_index
						? invertedIndexToAbstract(result.abstract_inverted_index)
						: "Não consta na base de dados.",
					keywords: result.keywords.map((kw) => kw.display_name),
					fwci: result.fwci === null ? 0 : result.fwci,
				};
			});

			return {
				page: 1,
				results: output,
				userEmail: "email@example.com",
				totalResultsCount: data.meta.count,
			};
		} catch (err) {
			console.error(`Erro na execução: ${err}`);
			return {
				page: 0,
				userEmail: searchObject.userEmail,
				results: [],
				totalResultsCount: 0,
			};
		}
	}
}
