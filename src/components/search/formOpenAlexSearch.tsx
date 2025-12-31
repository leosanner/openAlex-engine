"use client";

import { formSearchOpenAlex } from "@/app/actions/search-form-openalex";
import clsx from "clsx";
import { useActionState, useEffect, useState } from "react";
import LoadingSpinner from "../commom/loadingSpinner";
import TableObject from "../commom/tableObject";
import { ChevronLeft, ChevronRight, Search, Mail, Filter } from "lucide-react";

const labelCSS = clsx(
	"block text-[11px] font-bold uppercase tracking-wider mb-1.5"
);
const inputCSS = clsx(
	"w-full px-4 py-2.5 border border-slate-300 bg-white text-sm text-slate-700 rounded-none shadow-sm transition-all focus:border-[#003865] focus:ring-1 focus:ring-[#003865] outline-none placeholder:text-slate-300"
);
const selectCSS = clsx(
	"bg-white border border-slate-300 text-slate-700 text-xs font-bold py-1.5 px-3 rounded-none outline-none focus:border-[#003865] cursor-pointer"
);
const buttonStyle = clsx(
	"flex items-center justify-center p-2 border border-slate-300 bg-white text-slate-600 hover:bg-slate-100 transition-colors disabled:opacity-40"
);

export function OpenAlexForm() {
	const initialPageSize = 10;
	const availableOrderBy = ["fwci"];
	const orderByDirections = [
		["desc", "decrescente"],
		["asc", "crescente"],
	];
	const availablePageSize = [initialPageSize, 15, 20, 25, 50, 100];
	const defaultOrderBy = availableOrderBy[0];
	const formId = "articleFormId";

	const [state, formAction, isPending] = useActionState(formSearchOpenAlex, {
		data: { page: 0, results: [], userEmail: "", totalResultsCount: 0 },
		error: null,
	});

	const [currentPage, setPage] = useState(1);
	const [pageSize, setPageSize] = useState(initialPageSize);
	const [userEmail, setUserEmail] = useState("email@exemplo.com");
	const [searchString, setSearchString] = useState(
		"machine learning#iot%impact assessment#cummlative impacts"
	);
	const [orderByDirectionState, setOrderByDirectionState] = useState(
		orderByDirections[0][0]
	);

	const resultsLength = state.data.totalResultsCount;
	const lastPage = resultsLength > 0 ? Math.ceil(resultsLength / pageSize) : 1;

	useEffect(() => {
		if (currentPage > lastPage) setPage(lastPage);
	}, [currentPage, pageSize]);

	return (
		<div className="max-w-7xl mx-auto p-4">
			{/* Container do Formulário */}
			<div className="bg-slate-50 border border-slate-300 p-8 shadow-sm">
				<header className="mb-8 border-b border-slate-200 pb-4">
					<h2 className="text-[#003865] text-xl font-bold uppercase tracking-tight flex items-center gap-2">
						<Filter size={20} /> Portal de Pesquisa Acadêmica
					</h2>
				</header>

				<form id={formId} className="space-y-6" action={formAction}>
					<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
						{/* String de Busca */}
						<div className="md:col-span-8">
							<label htmlFor="search_string" className={labelCSS}>
								String de busca
							</label>
							<div className="relative">
								<input
									onChange={(e) => setSearchString(e.target.value)}
									value={searchString}
									type="text"
									name="searchString"
									id="search_string"
									placeholder="Termos separados por # ou %"
									className={inputCSS}
								/>
							</div>
						</div>

						{/* Email */}
						<div className="md:col-span-4">
							<label htmlFor="user_email" className={labelCSS}>
								E-mail institucional
							</label>
							<div className="relative">
								<input
									onChange={(e) => setUserEmail(e.target.value)}
									value={userEmail}
									type="email"
									name="userEmail"
									id="user_email"
									className={inputCSS}
								/>
								<Mail
									className="absolute right-3 top-2.5 text-slate-300"
									size={18}
								/>
							</div>
						</div>
					</div>

					<div className="flex flex-wrap items-end justify-between gap-4 pt-4 border-t border-slate-200">
						{/* Ordenação */}
						<div className="flex gap-4">
							<div>
								<label className={labelCSS}>Ordenar por</label>
								<select
									name="orderBy"
									className={selectCSS}
									defaultValue={defaultOrderBy}
								>
									{availableOrderBy.map((opt, i) => (
										<option key={i} value={opt}>
											{opt.toUpperCase()}
										</option>
									))}
								</select>
							</div>
							<div>
								<label className={labelCSS}>Direção</label>
								<select
									name="orderByDirection"
									className={selectCSS}
									value={orderByDirectionState}
									onChange={(e) => setOrderByDirectionState(e.target.value)}
								>
									{orderByDirections.map((opt, i) => (
										<option key={i} value={opt[0]}>
											{opt[1]}
										</option>
									))}
								</select>
							</div>
						</div>

						{/* Botão de Busca - Verde Petrobras */}
						<button
							className="bg-[#008542] hover:bg-[#006d35] text-white font-bold uppercase text-sm px-10 py-3 transition-all flex items-center gap-3 disabled:bg-slate-400"
							type="submit"
							disabled={isPending}
						>
							{isPending ? (
								<>
									<LoadingSpinner /> Processando
								</>
							) : (
								<>
									<Search size={18} /> Executar Busca
								</>
							)}
						</button>
					</div>

					<input type="hidden" name="pageSize" value={pageSize} />
					<input type="hidden" name="page" value={currentPage} />
				</form>
			</div>

			{/* Seção de Resultados */}
			<div className="mt-10 space-y-4">
				{state.data.results.length > 0 ? (
					<>
						<div className="flex items-center justify-between border-b border-[#003865] pb-2">
							<h3 className="font-bold uppercase text-sm tracking-widest">
								Resultados Localizados ({resultsLength})
							</h3>
						</div>

						<TableObject articles={state.data} />

						{/* Paginação Institucional */}
						<div className="bg-slate-50 border border-slate-200 p-4 flex flex-col md:flex-row justify-between items-center gap-4">
							<div className="flex items-center gap-3 text-xs font-bold uppercase">
								<span>Resultados por página:</span>
								<select
									className={selectCSS}
									onChange={(e) => setPageSize(Number(e.target.value))}
									value={pageSize}
								>
									{availablePageSize.map((size, i) => (
										<option key={i} value={size}>
											{size}
										</option>
									))}
								</select>
							</div>

							<div className="flex items-center gap-2">
								<span className="text-[11px] font-bold uppercase mr-4">
									Página {currentPage} de {lastPage}
								</span>

								<button
									onClick={() => {
										currentPage === 1 ? setPage(1) : setPage(currentPage - 1);
									}}
									type="submit"
									form={formId}
									className={buttonStyle}
								>
									<ChevronLeft size={18} />
								</button>

								<button
									onClick={() => {
										currentPage === lastPage
											? setPage(lastPage)
											: setPage(currentPage + 1);
									}}
									type="submit"
									form={formId}
									className={buttonStyle}
								>
									<ChevronRight size={18} />
								</button>

								<button
									onClick={() => setPage(lastPage)}
									type="submit"
									form={formId}
									className="ml-2 px-4 py-2 border border-slate-300 text-[10px] font-bold uppercase hover:bg-slate-100 transition-colors"
								>
									Pular para o fim
								</button>
							</div>
						</div>
					</>
				) : (
					!isPending && (
						<div className="text-center py-20 border-2 border-dashed border-slate-200 text-slate-400 font-medium">
							Aguardando parâmetros para iniciar pesquisa...
						</div>
					)
				)}
			</div>
		</div>
	);
}
