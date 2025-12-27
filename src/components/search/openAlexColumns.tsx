import type { ColumnDef } from "@tanstack/react-table";
import type { OpenAlexArticle } from "@/schemas/openAlex";

export const openAlexColumnsLite: ColumnDef<OpenAlexArticle>[] = [
	{ header: "Título", accessorKey: "title" },
	{ header: "FWCI", accessorKey: "fwci" },
	{
		header: "Keywords",
		id: "keywords",
		accessorFn: (r) => (r.keywords ?? []).join(", "),
		cell: ({ row }) => (
			<div className="max-w-[520px] truncate">
				{row.getValue("keywords") as string}
			</div>
		),
	},
	{
		header: "Abstract",
		accessorKey: "abstract",
		cell: ({ row }) => (
			<div className="max-w-[520px] truncate">{row.getValue("abstract")}</div>
		),
	},
];
