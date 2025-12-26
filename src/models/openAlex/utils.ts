export function buildSearchQueryOpenAlex(
	searchString: string,
	fieldSearch: string = "title.search"
) {
	if (!searchString) {
		return " ";
	}

	const search_blocs = searchString.split("%");
	let filterQuery: string[] = [];

	for (const orElement of search_blocs) {
		const content = orElement.replace("#", "|");
		filterQuery.push(`${fieldSearch}:${content}`);
	}

	return filterQuery.join(",");
}

export function invertedIndexToAbstract(
	invertedIndex: Record<string, number[]>
): string {
	const positionMap: Record<number, string> = {};

	for (const [word, positions] of Object.entries(invertedIndex)) {
		for (const pos of positions) {
			positionMap[pos] = word;
		}
	}

	return Object.keys(positionMap)
		.sort((a, b) => Number(a) - Number(b))
		.map((pos) => positionMap[parseInt(pos)])
		.join(" ");
}
