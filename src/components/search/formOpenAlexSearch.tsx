"use client";

import { formSearchOpenAlex } from "@/app/actions/search-form-openalex";
import clsx from "clsx";
import { useActionState } from "react";
import { DisplayArticleInformation } from "./displayArticleInformation";
import LoadingSpinner from "../commom/loadingSpinner";
import TableResults from "./tableResults";

export function OpenAlexForm() {
	const availableOptions = ["fwci", "cited_by_count"];
	const defaultOrderBy = availableOptions[0];

	const [state, formAction, isPending] = useActionState(formSearchOpenAlex, {
		data: { page: 0, results: [], userEmail: "" },
		error: null,
	});

	const labelCSS = clsx("text-2xl");
	const inputCSS = clsx(
		"w-full px-4 py-2 border-2 border-gray-300 rounded-md outline-none transition-colors focus:border-gray-900"
	);

	return (
		<>
			<div className="bg-grey-300 w-1/2 flex justify-around">
				<form className="flex flex-col gap-3 w-2/3" action={formAction}>
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
							{availableOptions.map((option, index) => {
								return (
									<option key={index} value={option}>
										{option}
									</option>
								);
							})}
						</select>
					</label>
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
			<div className="my-5 w-2/3 bg px-3 border-2 border-gray-900">
				{state.data && <TableResults openAlexOutput={state.data} />}
				{/* {state.data &&
					state.data.results.map((article, index) => {
						return (
							<DisplayArticleInformation articleObj={article} key={index} />
						);
					})} */}
			</div>
		</>
	);
}
