"use client";

import { formSearchOpenAlex } from "@/app/actions/search-form-openalex";
import clsx from "clsx";
import { useActionState, useEffect, useState } from "react";
import LoadingSpinner from "../commom/loadingSpinner";
import TableObject from "../commom/tableObject";
import { ChevronLeft, ChevronRight } from "lucide-react";

const buttonStyle =
	"p-1 rounded-xl cursor-pointer hover:bg-gray-200 disabled:cursor-not-allowed";
const labelCSS = clsx("text-2xl");
const inputCSS = clsx(
	"w-full px-4 py-2 border-2 border-gray-300 rounded-md outline-none transition-colors focus:border-gray-900"
);

export function OpenAlexForm() {
	const initialPageSize = 10;
	const availableOrderBy = ["fwci", "cited_by_count"];
	const availablePageSize = [initialPageSize, 15, 20, 25, 50, 100];
	const defaultOrderBy = availableOrderBy[0];
	const formId = "articleFormId";

	const [state, formAction, isPending] = useActionState(formSearchOpenAlex, {
		data: { page: 0, results: [], userEmail: "", totalResultsCount: 0 },
		error: null,
	});
	const [currentPage, setPage] = useState(1);
	const [pageSize, setPageSize] = useState(initialPageSize);

	const resultsLength = state.data.totalResultsCount;
	const lastPage = resultsLength > 0 ? Math.ceil(resultsLength / pageSize) : 1;

	useEffect(() => {
		if (currentPage > lastPage) {
			setPage(lastPage);
		}
	}, [currentPage, pageSize]);

	return (
		<>
			<div className="bg-grey-300 w-2/3 flex justify-around">
				<form
					id={formId}
					className="flex flex-col gap-3 w-2/3"
					action={formAction}
				>
					<label htmlFor="search_string" className={labelCSS}>
						<h2 className="font-bold">Insira sua string de busca</h2>
						<input
							type="text"
							name="searchString"
							id="search_string"
							placeholder="Ex: machine learning#iot%impact assessment#cummlative impacts"
							defaultValue="machine learning#iot%impact assessment#cummlative impacts"
							className={inputCSS}
						/>
					</label>
					<label htmlFor="user_email" className={labelCSS}>
						<h2 className="font-bold">Insira seu email</h2>
						<input
							type="email"
							name="userEmail"
							id="user_email"
							placeholder="email@exemplo.com"
							defaultValue="email@exemplo.com"
							className={inputCSS}
						/>
					</label>

					<label htmlFor="order_by" className={labelCSS}>
						<select name="orderBy" id="order_by" defaultValue={defaultOrderBy}>
							<option value="">Ordenar por</option>
							{availableOrderBy.map((option, index) => {
								return (
									<option key={index} value={option}>
										{option}
									</option>
								);
							})}
						</select>
					</label>

					<input type="hidden" name="pageSize" value={pageSize} />
					<input type="hidden" name="page" value={currentPage} />
					<button
						className="text-2xl bg-gray-800 text-white font-bold w-1/3 rounded-1xl p-1"
						type="submit"
					>
						{isPending ? (
							<>
								Carregando <LoadingSpinner />
							</>
						) : (
							"Enviar"
						)}
					</button>
				</form>
			</div>
			<div className="my-5 w-2/3 bg px-3">
				{state.data.results.length > 0 && <TableObject articles={state.data} />}
				<div className="flex justify-between">
					<div className="m-2">
						<span>Resultados por página: </span>
						<select onChange={(e) => setPageSize(Number(e.target.value))}>
							{availablePageSize.map((size, index) => {
								return (
									<option key={index} value={size}>
										{size}
									</option>
								);
							})}
						</select>
					</div>
					<div className="flex gap-x-4 my-2">
						<button
							onClick={() => {
								currentPage === 1 ? setPage(2) : setPage(currentPage - 1);
							}}
							disabled={currentPage === 1}
							type="submit"
							form={formId}
							className={buttonStyle}
						>
							<ChevronLeft />
						</button>
						<button
							onClick={() => {
								currentPage === lastPage
									? setPage(lastPage)
									: setPage(currentPage + 1);
							}}
							disabled={currentPage === lastPage}
							type="submit"
							form={formId}
							className={buttonStyle}
						>
							<ChevronRight />
						</button>
						<button
							onClick={() => {
								setPage(lastPage);
							}}
							type="submit"
							form={formId}
							className={buttonStyle}
						>
							Última página ({lastPage})
						</button>
						<span className="m-2">Página Atual: {currentPage}</span>
					</div>
				</div>
			</div>
		</>
	);
}
