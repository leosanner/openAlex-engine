"use client";

import { OpenAlexSearchOutput } from "@/schemas/openAlex";
import { DataTable } from "./dataTable";
import { openAlexColumnsLite } from "./openAlexColumns";

type TableResultsType = {
	openAlexOutput: OpenAlexSearchOutput;
};

export default function TableResults({ openAlexOutput }: TableResultsType) {
	const results = openAlexOutput.results ?? [];
	return <DataTable columns={openAlexColumnsLite} data={results} />;
}
