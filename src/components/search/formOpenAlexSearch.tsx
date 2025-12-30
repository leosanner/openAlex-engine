"use client";

import { formSearchOpenAlex } from "@/app/actions/search-form-openalex";
import clsx from "clsx";
import { useActionState, useEffect, useState } from "react";
import LoadingSpinner from "../commom/loadingSpinner";
import TableObject from "../commom/tableObject";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";

const buttonStyle = clsx(
	"p-1 rounded-xl",
	"cursor-pointer hover:bg-gray-200",
	"disabled:cursor-not-allowed"
);
const labelCSS = clsx("text-2xl");
const inputCSS = clsx(
	"w-full px-4 py-2 border-2",
	"border-gray-300 rounded-md outline-none transition-colors",
	"focus:border-gray-900"
);

export function OpenAlexForm() {
	// Consts
	const initialPageSize = 10;
	const availableOrderBy = ["fwci"];
	const orderByDirections = [
		["desc", "decrescente"],
		["asc", "crescente"],
	];
	const availablePageSize = [initialPageSize, 15, 20, 25, 50, 100];
	const defaultOrderBy = availableOrderBy[0];
	const formId = "articleFormId";

	// Default form values
	const [state, formAction, isPending] = useActionState(formSearchOpenAlex, {
		data: { page: 0, results: [], userEmail: "", totalResultsCount: 0 },
		error: null,
	});

	// States
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
							onChange={(e) => setSearchString(e.target.value)}
							value={searchString}
							type="text"
							name="searchString"
							id="search_string"
							placeholder="Ex: machine learning#iot%impact assessment#cummlative impacts"
							className={inputCSS}
						/>
					</label>
					<label htmlFor="user_email" className={labelCSS}>
						<h2 className="font-bold">Insira seu email</h2>
						<input
							onChange={(e) => {
								setUserEmail(e.target.value);
							}}
							value={userEmail}
							type="email"
							name="userEmail"
							id="user_email"
							placeholder="ex: email@exemplo.com"
							className={inputCSS}
						/>
					</label>

					<label htmlFor="order_by" className={`${labelCSS} flex gap-x-5`}>
						<h2 className="font-bold">Ordenar por: </h2>
						<select name="orderBy" id="order_by" defaultValue={defaultOrderBy}>
							{availableOrderBy.map((option, index) => {
								return (
									<option key={index} value={option}>
										{option}
									</option>
								);
							})}
						</select>
						<select
							name="orderByDirection"
							id="order_by"
							value={orderByDirectionState}
							onChange={(e) => {
								e.preventDefault();
								setOrderByDirectionState(e.target.value);
							}}
						>
							{orderByDirections.map((option, index) => {
								return (
									<option key={index} value={option[0]}>
										{option[1]}
									</option>
								);
							})}
						</select>
					</label>

					<input type="hidden" name="pageSize" value={pageSize} />
					<input type="hidden" name="page" value={currentPage} />
					<button
						className="text-2xl border-2 border-black cursor-pointer bg-green-900 text-white font-bold rounded-1xl p-1 hover:bg-green-900/90 max-w-40"
						type="submit"
					>
						{isPending ? (
							<>
								Carregando <LoadingSpinner />
							</>
						) : (
							<div className="flex items-center justify-between mx-2">
								<span>Buscar</span> <Search />
							</div>
						)}
					</button>
				</form>
			</div>
			<div className="my-5 w-full bg px-30">
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
								currentPage === 1 ? setPage(1) : setPage(currentPage - 1);
							}}
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
						<span className="m-2">
							Página {currentPage} de {lastPage}
						</span>
					</div>
				</div>
			</div>
		</>
	);
}
