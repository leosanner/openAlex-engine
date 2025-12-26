import { PostSearch } from "@/schemas/openAlex";
import { OpenAlexAPI } from "@/models/openAlex/openalex-api";
import { EmptyNecessaryParamsError } from "@/errors/openalex";

export async function POST(request: Request) {
	const requestBody: PostSearch = await request.json();
	const defaultHeaders = { "Content-Type": "application/json" };

	if (requestBody.searchString == null) {
		const errorMessage = { error: "Search string not received" };
		return new Response(JSON.stringify(errorMessage), {
			status: 400,
			headers: defaultHeaders,
		});
	}

	if (requestBody.searchString == "") {
		throw new EmptyNecessaryParamsError();
	}

	const openAlexAPI = new OpenAlexAPI();
	const results = await openAlexAPI.searchWorksByCompleteString(requestBody);

	return new Response(JSON.stringify(results), {
		status: 200,
		headers: defaultHeaders,
	});
}
