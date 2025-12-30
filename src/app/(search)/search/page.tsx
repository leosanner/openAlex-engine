import { OpenAlexForm } from "@/components/search/formOpenAlexSearch";

export default async function SearchPage() {
	return (
		<div className="flex flex-col items-center max-w-full">
			<div className="container">
				<section>
					<h1>Mecanismo de busca</h1>
					<span>
						Falar sobre o mecanismo, linhas gerais, descrição do produto
					</span>
				</section>

				<section>
					<h2>Como utilizar</h2>
					<span>Explicar em detalhes o funcionamento</span>
					<h3>Como fazer a busca</h3>
					<span>
						String de busca, email, ordenar por feci, futuras features
					</span>
				</section>
			</div>
			<OpenAlexForm />
		</div>
	);
}
