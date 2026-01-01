"use server";

import { OpenAlexSearch, OpenAlexSearchOutput } from "@/schemas/openAlex";

async function openAlexSearchRequest(object: OpenAlexSearch) {
	const apiUrl =
		process.env.NODE_ENV === "production"
			? process.env.PRODUCTION_URL
			: "http://localhost:3000";

	const response = await fetch(`${apiUrl}/api/v1/search`, {
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
	const searchInFilter = formData.get("searchInFilter") as string;

	if (!userEmail || !searchString || !pageSize || !currentPage) {
		return {
			error: "Campos não fornecidos",
			data: prevState.data,
		};
	}

	const apiResponseContent = await openAlexSearchRequest({
		searchString: searchString,
		userEmail: userEmail,
		page: Number(currentPage),
		pageSize: Number(pageSize),
		orderBy: orderBy,
		orderByDirection: orderByDirection,
		searchFilter: searchInFilter,
	});

	return {
		error: null,
		data: apiResponseContent,
	};
}
