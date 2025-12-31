import { OpenAlexForm } from "@/components/search/formOpenAlexSearch";
import {
	BarChart3,
	Mail,
	Search,
	Filter,
	Database,
	Info,
	CheckCircle2,
} from "lucide-react";

export default async function SearchPage() {
	return (
		<div className="min-h-screen bg-slate-50 text-slate-800 antialiased font-sans">
			{/* 1. Header: Foco no Mecanismo com Provedor Subjacente */}
			<header className="bg-white border-b-4 border-[#FFD100] shadow-sm">
				<div className="max-w-7xl mx-auto py-12 px-6">
					<div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
						<div className="space-y-2">
							<h1 className="text-3xl md:text-4xl font-black text-[#008542] tracking-tighter uppercase">
								Mecanismo de{" "}
								<span className="text-slate-700">Busca Acadêmica</span>
							</h1>
							<p className="text-lg text-slate-500 font-medium">
								Tecnologia de recuperação de dados alimentada pela base{" "}
								<span className="text-[#008542] font-bold">OpenAlex</span>
							</p>
						</div>
					</div>
				</div>
			</header>

			<main className="max-w-7xl mx-auto px-6 py-12">
				{/* 2. Seção de Documentação Amigável */}
				<section className="mb-20">
					<div className="flex flex-col gap-2 mb-10 text-center md:text-left">
						<h2 className="text-3xl font-bold flex items-center justify-center md:justify-start gap-3">
							<span className="h-8 w-2 bg-[#008542] hidden md:block"></span>
							Como otimizar sua busca
						</h2>
						<p className="text-slate-500 max-w-3xl text-lg">
							Siga as instruções abaixo para encontrar exatamente o que você
							precisa na maior base de dados científica do mundo.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{/* FOCO PRINCIPAL: String de Busca (Largura Maior) */}
						<div className="lg:col-span-2 bg-white p-8 rounded-2xl border-2 border-[#008542]/20 shadow-sm relative overflow-hidden">
							<div className="absolute top-0 right-0 p-4 opacity-5 text-[#008542]">
								<Search size={120} />
							</div>
							<div className="relative z-10">
								<h3 className="font-bold text-xl mb-4 flex items-center gap-2">
									<Info className="text-[#008542]" size={22} />
									Como montar sua pesquisa (String de Busca)
								</h3>
								<div className="grid md:grid-cols-2 gap-6">
									<div className="space-y-3">
										<p className="text-sm text-slate-600 leading-relaxed text-justify">
											O mecanismo permite combinar termos para filtrar
											resultados. Use aspas para termos compostos e conectores
											para lógica.
										</p>
										<ul className="text-xs space-y-2 text-slate-500">
											<li className="flex items-center gap-2">
												<CheckCircle2 size={14} className="text-[#008542]" />{" "}
												Use <strong>AND</strong> para somar termos
											</li>
											<li className="flex items-center gap-2">
												<CheckCircle2 size={14} className="text-[#008542]" />{" "}
												Use <strong>OR</strong> para alternar termos
											</li>
										</ul>
									</div>
									<div className="bg-slate-50 p-4 rounded-xl border border-slate-100 font-mono text-xs space-y-3">
										<div className="text-blue-600 italic">
											// Exemplo prático:
										</div>
										<div className="p-2 bg-white border border-slate-200 rounded shadow-sm">
											"transição energética"{" "}
											<span className="text-[#008542] font-bold">AND</span>{" "}
											"hidrogênio verde"
										</div>
										<div className="p-2 bg-white border border-slate-200 rounded shadow-sm">
											title: "descarbonização"{" "}
											<span className="text-[#008542] font-bold">OR</span>{" "}
											abstract: "carbono"
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Card: Field-Weighted Citation Impact */}
						<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm transition-all hover:border-[#008542]">
							<div className="w-12 h-12 bg-[#008542]/10 text-[#008542] rounded-xl flex items-center justify-center mb-6">
								<BarChart3 size={24} />
							</div>
							<h3 className="font-bold text-lg mb-3">Métrica de Impacto</h3>
							<p className="text-sm text-slate-500 leading-relaxed">
								O <strong>FWCI</strong> mostra o impacto do artigo comparado à
								média mundial. Valores acima de 1.0 indicam desempenho superior
								à média da área.
							</p>
						</div>

						{/* Card: Filtros Dinâmicos */}
						<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm transition-all hover:border-[#008542]">
							<div className="w-12 h-12 bg-[#008542]/10 text-[#008542] rounded-xl flex items-center justify-center mb-6">
								<Filter size={24} />
							</div>
							<h3 className="font-bold text-lg mb-3">Refinar Resultados</h3>
							<p className="text-sm text-slate-500">
								Organize por data, relevância ou volume de citações. Isso ajuda
								a identificar desde os clássicos até as pesquisas mais recentes.
							</p>
						</div>

						{/* Card: Identificação via Polite Pool */}
						<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm transition-all hover:border-[#008542]">
							<div className="w-12 h-12 bg-[#008542]/10 text-[#008542] rounded-xl flex items-center justify-center mb-6">
								<Mail size={24} />
							</div>
							<h3 className="font-bold text-lg mb-3">Identificação (Email)</h3>
							<p className="text-sm text-slate-500 leading-relaxed text-justify">
								O OpenAlex prioriza buscas de usuários identificados. Ao usar
								seu e-mail, sua requisição entra na fila de prioridade (Polite
								Pool).
							</p>
						</div>

						{/* Banner Informativo sobre o Provedor */}
						<div className="bg-slate-900 text-white rounded-2xl p-8 flex flex-col justify-center relative overflow-hidden group">
							<div className="relative z-10">
								<h4 className="font-bold text-lg mb-2 flex items-center gap-2">
									<Database className="text-[#FFD100]" size={20} />
									Provedor de Dados
								</h4>
								<p className="text-sm text-slate-300 leading-relaxed">
									Nosso mecanismo integra-se à API OpenAlex, garantindo acesso a
									250 milhões de trabalhos acadêmicos atualizados diariamente.
								</p>
							</div>
							<div className="absolute -bottom-4 -right-4 opacity-10 group-hover:scale-110 transition-transform">
								<Database size={100} />
							</div>
						</div>
					</div>
				</section>

				{/* 3. Área de Busca - Layout Amplo */}
				<section id="search-area">
					<div className="flex items-center justify-between mb-8">
						<h2 className="text-2xl font-black flex items-center gap-3 uppercase tracking-tighter">
							<div className="h-6 w-2 bg-[#008542]"></div>
							Executar Pesquisa
						</h2>
					</div>

					<div className="bg-white rounded-[2rem] border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden min-h-[500px]">
						{/* Detalhe visual superior com as cores da marca */}
						<div className="h-2 w-full bg-gradient-to-r from-[#008542] via-[#FFD100] to-[#008542]"></div>
						<div className="p-8 md:p-14">
							<OpenAlexForm />
						</div>
					</div>
				</section>
			</main>

			<footer className="bg-slate-900 text-slate-400 py-12 border-t-8 border-[#008542]">
				<div className="max-w-7xl mx-auto px-6 text-center">
					<p className="text-sm font-semibold tracking-widest uppercase mb-4 text-white">
						Mecanismo de Inteligência Acadêmica
					</p>
					<div className="flex justify-center gap-6 mb-8 opacity-50">
						<div className="h-1 w-16 bg-[#008542]"></div>
						<div className="h-1 w-16 bg-[#FFD100]"></div>
					</div>
					<p className="text-xs max-w-md mx-auto leading-relaxed">
						Interface desenvolvida para equipes de pesquisa. <br />
						Dados estruturados via API OpenAlex.
					</p>
				</div>
			</footer>
		</div>
	);
}
