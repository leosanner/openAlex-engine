import { OpenAlexSearchOutput } from "@/schemas/openAlex";
import clsx from "clsx";
import Link from "next/link";

type TableObjectType = {
	articles: OpenAlexSearchOutput;
};

export default function TableObject({ articles }: TableObjectType) {
	const tableColumns = Object.keys(articles.results[0]).slice(1);
	const tableDataStyle = clsx("p-2", "max-h-50");

	return (
		<div className="overflow-y-auto h-200 border-2">
			<table className="w-full">
				<thead className="sticky top-0 bg-white z-10 shadow-sm">
					<tr className="divide-y divide-grey-100 divide-x">
						{tableColumns.map((colName, index) => {
							return (
								<th className={tableDataStyle} key={`colHeader${index}`}>
									{colName}
								</th>
							);
						})}
					</tr>
				</thead>
				<tbody>
					{articles.results.map((articleRow, index) => {
						return (
							<tr
								key={`articleRow${index}`}
								className="divide-y divide-grey-100 divide-x"
							>
								<td className={tableDataStyle}>
									<div className="overflow-y-auto max-h-50 hover:text-green-900">
										<Link href={articleRow.id}>{articleRow.title}</Link>
									</div>
								</td>
								<td className={tableDataStyle}>
									<div className="overflow-y-auto max-h-50 max-w-300">
										{articleRow.abstract}
									</div>
								</td>
								<td className={tableDataStyle}>
									<div className="flex flex-col gap-2 items-start overflow-x-auto whitespace-nowrap max-h-50 pb-2">
										{articleRow.keywords.map((kw, i) => (
											<span
												key={i}
												className="bg-blue-100 mx-auto text-blue-800 px-2 py-1 rounded text-xs"
											>
												{kw}
											</span>
										))}
									</div>
								</td>
								<td className={tableDataStyle}>{articleRow.fwci}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
