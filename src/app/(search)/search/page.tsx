import { OpenAlexForm } from "@/components/search/formOpenAlexSearch";
import { OpenAlexSearchOutput } from "@/schemas/openAlex";

async function searchAPI() {
	const response = await fetch("http://localhost:3000/api/v1/search", {
		method: "POST",
		body: JSON.stringify({
			searchString: "machine learning#iot%impact assessment#cummlative impacts",
		}),
	});

	const responseBody = (await response.json()) as OpenAlexSearchOutput;
	return responseBody;
}

export default async function SearchPage() {
	return (
		<div className="flex flex-col items-center max-w-full">
			<OpenAlexForm />
		</div>
	);
}
