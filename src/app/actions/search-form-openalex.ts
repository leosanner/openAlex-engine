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
	data: OpenAlexSearchOutput;
};

export async function formSearchOpenAlex(
	prevState: StateType,
	formData: FormData
): Promise<StateType> {
	const currentPage = formData.get("page") as string;
	const pageSize = formData.get("pageSize") as string;
	const orderBy = formData.get("orderBy") as string;
	const orderByDirection = formData.get("orderByDirection") as string;
	const userEmail = formData.get("userEmail") as string;
	const searchString = formData.get("searchString") as string;

	if (!userEmail || !searchString || !pageSize || !currentPage) {
		return {
			error: "Campos não fornecidos",
			data: prevState.data,
		};
	}

	const apiResponseContent = await searchAPI({
		searchString: searchString,
		userEmail: userEmail,
		page: Number(currentPage),
		pageSize: Number(pageSize),
		orderBy: orderBy,
		orderByDirection: orderByDirection,
	});

	return {
		error: null,
		data: apiResponseContent,
	};
}
