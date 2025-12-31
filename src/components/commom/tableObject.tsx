import { OpenAlexSearchOutput } from "@/schemas/openAlex";
import clsx from "clsx";
import Link from "next/link";

type TableObjectType = {
	articles: OpenAlexSearchOutput;
};

export default function TableObject({ articles }: TableObjectType) {
	const tableDataStyle = clsx(
		"px-4 py-4 text-[13px] leading-snug border-r border-slate-200 last:border-r-0 align-top text-slate-700"
	);

	return (
		<div className="w-full border border-slate-300 bg-white shadow-md overflow-hidden">
			<div className="overflow-y-auto max-h-[650px] scrollbar-thin scrollbar-thumb-slate-300">
				<table className="w-full table-fixed border-collapse">
					<thead className="sticky top-0 z-20 shadow-sm">
						<tr className="bg-[#003865] border-b border-slate-300 text-white">
							<th className="w-1/4 px-4 py-3 text-left text-xs font-bold uppercase tracking-tight border-r border-white/10">
								Título
							</th>
							<th className="w-2/5 px-4 py-3 text-left text-xs font-bold uppercase tracking-tight border-r border-white/10">
								Resumo
							</th>
							<th className="w-1/4 px-4 py-3 text-left text-xs font-bold uppercase tracking-tight border-r border-white/10">
								Palavras-Chave
							</th>
							<th className="w-20 px-4 py-3 text-center text-xs font-bold uppercase tracking-tight">
								FWCI
							</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-slate-200">
						{articles.results.map((articleRow, index) => (
							<tr
								key={`articleRow${index}`}
								className="hover:bg-slate-50 transition-colors"
							>
								{/* Título */}
								<td
									className={clsx(
										tableDataStyle,
										"font-semibold text-slate-900"
									)}
								>
									<div className="max-h-40 overflow-y-auto pr-2 font-serif tracking-tight">
										<Link
											href={articleRow.id}
											className="hover:underline hover:text-[#008542]"
										>
											{articleRow.title}
										</Link>
									</div>
								</td>

								{/* Resumo (Amplo) */}
								<td className={tableDataStyle}>
									<div className="max-h-40 overflow-y-auto text-justify pr-3 scrollbar-thin text-slate-600">
										{articleRow.abstract ||
											"Resumo não disponível para este documento."}
									</div>
								</td>

								{/* Keywords (Grid 4 linhas x N colunas com overflow horizontal) */}
								<td className={tableDataStyle}>
									<div className="overflow-x-auto pb-2 scrollbar-thin">
										<div className="grid grid-rows-5 grid-flow-col gap-1.5 min-w-max">
											{articleRow.keywords.map((kw, i) => (
												<span
													key={`kwInfo${i}`}
													className="inline-flex items-center bg-blue-200 border border-slate-300 text-slate-700 px-2 py-1 text-[10px] font-bold uppercase whitespace-nowrap h-6"
												>
													{kw}
												</span>
											))}
										</div>
									</div>
								</td>

								{/* FWCI */}
								<td
									className={clsx(
										tableDataStyle,
										"font-mono font-bold text-center bg-slate-50/50"
									)}
								>
									{articleRow.fwci}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
