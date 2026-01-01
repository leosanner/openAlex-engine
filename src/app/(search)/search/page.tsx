import { OpenAlexForm } from "@/components/search/formOpenAlexSearch";
import {
	BarChart3,
	Mail,
	Search,
	Filter,
	Layers,
	SortDesc,
	CheckCircle2,
	Target,
	TrendingUp,
} from "lucide-react";

export default async function SearchPage() {
	return (
		<div className="min-h-screen bg-slate-50 text-slate-800 antialiased font-sans">
			{/* 1. Header */}
			<header className="bg-white border-b-4 border-[#FFD100] shadow-sm">
				<div className="max-w-7xl mx-auto py-12 px-6">
					<div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
						<div className="space-y-2">
							<h1 className="text-3xl md:text-4xl font-black text-[#008542] tracking-tighter uppercase">
								Mecanismo de{" "}
								<span className="text-slate-700">Busca Acadêmica</span>
							</h1>
							<p className="text-lg text-slate-500 font-medium">
								Recuperação de dados avançada alimentada por{" "}
								<span className="text-[#008542] font-bold">OpenAlex</span>
							</p>
						</div>
					</div>
				</div>
			</header>

			<main className="max-w-7xl mx-auto px-6 py-12">
				{/* 2. Seção de Parâmetros */}
				<section className="mb-20">
					<div className="flex flex-col gap-2 mb-10 text-center md:text-left border-l-4 border-[#008542] pl-6">
						<h2 className="text-3xl font-bold text-[#003865]">
							Parâmetros de Pesquisa
						</h2>
						<p className="text-slate-500 max-w-3xl text-lg">
							Utilize o poder da lógica booleana e filtros de métricas para
							refinar sua prospecção científica.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{/* CARD 1: Lógica Booleana */}
						<div className="lg:col-span-2 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden transition-all hover:border-[#008542]/40">
							<div className="relative z-10">
								<h3 className="font-bold text-xl mb-4 flex items-center gap-2 text-[#003865]">
									<Layers className="text-[#008542]" size={22} />
									Operadores Booleanos (AND, OR, NOT)
								</h3>
								<div className="grid md:grid-cols-2 gap-6">
									<div className="space-y-3">
										<p className="text-sm text-slate-600 leading-relaxed text-justify">
											Combine conceitos para criar interseções precisas entre
											áreas distintas usando parênteses para agrupar sinônimos.
										</p>
										<ul className="text-xs space-y-2 text-slate-500">
											<li className="flex items-center gap-2">
												<CheckCircle2 size={14} className="text-[#008542]" />{" "}
												<strong>(A OR B):</strong> União de termos.
											</li>
											<li className="flex items-center gap-2">
												<CheckCircle2 size={14} className="text-[#008542]" />{" "}
												<strong>AND:</strong> Interseção obrigatória.
											</li>
										</ul>
									</div>
									<div className="bg-slate-50 p-4 rounded-xl border border-slate-100 font-mono text-xs space-y-2 shadow-inner">
										<div className="text-blue-600 italic">
											// Exemplo de áreas:
										</div>
										<div className="p-2 bg-white border border-slate-200 rounded text-slate-700">
											<span className="text-purple-600">(</span>"IA"{" "}
											<span className="text-blue-600">OR</span> "robótica"
											<span className="text-purple-600">)</span>
											<br />
											<span className="text-green-700 font-bold uppercase tracking-widest">
												AND
											</span>
											<br />
											<span className="text-purple-600">(</span>"EIA"{" "}
											<span className="text-blue-600">OR</span> "ambiental"
											<span className="text-purple-600">)</span>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* CARD 2: Escopo da Busca */}
						<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm transition-all hover:border-[#008542]">
							<div className="w-12 h-12 bg-[#008542]/10 text-[#008542] rounded-xl flex items-center justify-center mb-6">
								<Target size={24} />
							</div>
							<h3 className="font-bold text-lg mb-3 text-[#003865]">
								Escopo de Busca
							</h3>
							<p className="text-sm text-slate-500 leading-relaxed italic">
								Ex: Título + Resumo
								<br />
								Ex: Apenas Título
							</p>
						</div>

						{/* CARD 3: Critérios de Rank */}
						<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm transition-all hover:border-[#008542]">
							<div className="w-12 h-12 bg-[#008542]/10 text-[#008542] rounded-xl flex items-center justify-center mb-6">
								<SortDesc size={24} />
							</div>
							<h3 className="font-bold text-lg mb-4 text-[#003865]">
								Critérios de Rank
							</h3>
							<div className="flex flex-col gap-2">
								<div className="flex items-center gap-2 p-2 bg-slate-50 rounded border border-slate-100">
									<TrendingUp size={16} className="text-[#008542]" />
									<span className="text-xs font-bold text-slate-700 uppercase tracking-tighter">
										Impacto (FWCI)
									</span>
								</div>
								<div className="flex items-center gap-2 p-2 bg-slate-50 rounded border border-slate-100">
									<Search size={16} className="text-[#008542]" />
									<span className="text-xs font-bold text-slate-700 uppercase tracking-tighter">
										Quantidade de citações
									</span>
								</div>
							</div>
						</div>

						{/* CARD 4: Métrica FWCI */}
						<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm transition-all hover:border-[#008542]">
							<div className="w-12 h-12 bg-[#008542]/10 text-[#008542] rounded-xl flex items-center justify-center mb-6">
								<BarChart3 size={24} />
							</div>
							<h3 className="font-bold text-lg mb-2 text-[#003865]">
								Impacto FWCI
							</h3>
							<p className="text-xs text-slate-500 leading-relaxed">
								Normaliza citações pela média mundial da área.
								<span className="block mt-2 font-bold text-[#008542] decoration-2">
									&gt; 1.0 = Acima da média mundial.
								</span>
							</p>
						</div>

						{/* CARD 5: Polite Pool (Padrão igual aos outros) */}
						<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm transition-all hover:border-[#008542]">
							<div className="w-12 h-12 bg-[#008542]/10 text-[#008542] rounded-xl flex items-center justify-center mb-6">
								<Mail size={24} />
							</div>
							<h3 className="font-bold text-lg mb-3 text-[#003865]">
								Polite Pool
							</h3>
							<p className="text-sm text-slate-500 leading-relaxed">
								Informe seu e-mail institucional para obter{" "}
								<strong>prioridade máxima</strong> de processamento e
								estabilidade na API OpenAlex.
							</p>
						</div>
					</div>
				</section>

				{/* 3. Área de Busca */}
				<section id="search-area">
					<div className="flex items-center justify-between mb-8">
						<h2 className="text-2xl font-black flex items-center gap-3 uppercase tracking-tighter text-[#003865]">
							<div className="h-6 w-2 bg-[#008542]"></div>
							Configurar Consulta
						</h2>
					</div>

					<div className="bg-white rounded-[2rem] border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden min-h-[500px]">
						<div className="h-2 w-full bg-gradient-to-r from-[#008542] via-[#FFD100] to-[#008542]"></div>
						<div className="p-8 md:p-14">
							<OpenAlexForm />
						</div>
					</div>
				</section>
			</main>

			<footer className="bg-slate-900 text-slate-400 py-12 border-t-8 border-[#008542]">
				<div className="max-w-7xl mx-auto px-6 text-center text-xs uppercase tracking-widest font-bold">
					IMAI &copy; 2026
				</div>
			</footer>
		</div>
	);
}
