"use server";

import { OpenAlexSearch, OpenAlexSearchOutput } from "@/schemas/openAlex";

async function searchAPI(object: OpenAlexSearch) {
	const response = await fetch("http://localhost:3000/api/v1/search", {
		method: "POST",
		body: JSON.stringify(object),
	});

	const responseBody = (await response.json()) as OpenAlexSearchOutput;
	return responseBody;
}

// implementar validação com zod

type StateType = {
	error: string | null;
	data: OpenAlexSearchOutput | null;
};

export async function formSearchOpenAlex(
	prevState: StateType,
	formData: FormData
) {
	const orderBy = formData.get("orderBy") as string;
	const userEmail = formData.get("userEmail") as string;
	const searchString = formData.get("searchString") as string;

	if (!userEmail || !searchString) {
		return {
			error: "Campos não fornecidos",
			data: null,
		};
	}

	const apiResponseContent = await searchAPI({
		searchString: searchString,
		userEmail: userEmail,
	});

	console.log(apiResponseContent);

	return {
		error: null,
		data: apiResponseContent,
	};
}
