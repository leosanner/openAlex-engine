import {
	OpenAlexAPIReponseArticle,
	OpenAlexArticle,
	OpenAlexSearch,
	OpenAlexSearchOutput,
	OpenAlexWorksResponse,
} from "@/schemas/openAlex";
import { openAlexWorks } from "./openalex-routes";
import { buildSearchQueryOpenAlex, invertedIndexToAbstract } from "./utils";

export class OpenAlexAPI {
	async searchWorksByCompleteString(
		searchObject: OpenAlexSearch
	): Promise<OpenAlexSearchOutput> {
		const searchString = buildSearchQueryOpenAlex(searchObject.searchString);
		const params = new URLSearchParams({
			filter: searchString,
			sort: "fwci:desc",
			"per-page": "100",
		});

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
					page: 0,
					userEmail: searchObject.userEmail,
					results: [],
				};
			}
			const results = data.results;
			const output: OpenAlexArticle[] = results.map((result) => {
				return {
					title: result.title,
					abstract: result.abstract_inverted_index
						? invertedIndexToAbstract(result.abstract_inverted_index)
						: "not founded",
					fwci: result.fwci,
					keywords: result.keywords.map((kw) => kw.display_name),
				};
			});

			return {
				page: 1,
				results: output,
				userEmail: "email@example.com",
			};
		} catch (err) {
			console.error(`Erro na execução: ${err}`);
			return {
				page: 0,
				userEmail: searchObject.userEmail,
				results: [],
			};
		}
	}
}
