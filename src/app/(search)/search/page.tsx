import { OpenAlexForm } from "@/components/search/formOpenAlexSearch";
import {
	BookOpen,
	BarChart3,
	Mail,
	ArrowDown,
	Search,
	Filter,
	Database,
	Zap,
} from "lucide-react";

export default async function SearchPage() {
	return (
		<div className="min-h-screen bg-slate-50 text-slate-800 antialiased font-sans">
			{/* 1. Header Institucional */}
			<header className="bg-white border-b-4 border-[#FFD100] shadow-sm">
				<div className="max-w-7xl mx-auto py-12 px-6">
					<div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
						<div className="space-y-2">
							<h1 className="text-3xl md:text-4xl font-black text-[#008542] tracking-tighter uppercase">
								OpenAlex<span className="text-slate-700">Search</span>
							</h1>
							<p className="text-lg text-slate-500 font-medium italic">
								Sitema de Recuperação de Dados e Inteligência Acadêmica
							</p>
						</div>
					</div>
				</div>
			</header>

			<main className="max-w-7xl mx-auto px-6 py-12">
				{/* 2. Seção de Documentação Expandida */}
				<section className="mb-20">
					<div className="flex flex-col gap-2 mb-10 text-center md:text-left">
						<h2 className="text-3xl font-bold flex items-center justify-center md:justify-start gap-3">
							<span className="h-8 w-2 bg-[#008542] hidden md:block"></span>
							Documentação e Parametrização
						</h2>
						<p className="text-slate-500 max-w-3xl">
							Entenda como configurar suas requisições para obter o máximo de
							precisão na extração de dados científicos.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{/* Card 1: Busca Semântica */}
						<div className="group bg-white p-8 rounded-2xl border border-slate-200 shadow-sm transition-all hover:shadow-md">
							<div className="w-12 h-12 bg-slate-50 border border-slate-100 text-[#008542] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#008542] group-hover:text-white transition-colors">
								<Search size={24} />
							</div>
							<h3 className="font-bold text-lg mb-3">Sintaxe de Busca</h3>
							<p className="text-sm text-slate-600 leading-relaxed italic mb-4">
								"Termos exatos", AND, OR, NOT.
							</p>
							<p className="text-sm text-slate-500">
								A interface suporta lógica booleana completa. Combine
								palavras-chave para restringir os resultados a nichos
								específicos.
							</p>
						</div>

						{/* Card 2: Field-Weighted Citation Impact */}
						<div className="group bg-white p-8 rounded-2xl border border-slate-200 shadow-sm transition-all hover:shadow-md">
							<div className="w-12 h-12 bg-slate-50 border border-slate-100 text-[#008542] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#008542] group-hover:text-white transition-colors">
								<BarChart3 size={24} />
							</div>
							<h3 className="font-bold text-lg mb-3">Métrica FWCI</h3>
							<p className="text-sm text-slate-600 leading-relaxed italic mb-4">
								Impacto Normalizado por Área.
							</p>
							<p className="text-sm text-slate-500">
								Filtre por impacto ponderado. Um FWCI de 1.20 significa que o
								trabalho é 20% mais citado que a média mundial na sua
								disciplina.
							</p>
						</div>

						{/* Card 3: Filtros Avançados */}
						<div className="group bg-white p-8 rounded-2xl border border-slate-200 shadow-sm transition-all hover:shadow-md">
							<div className="w-12 h-12 bg-slate-50 border border-slate-100 text-[#008542] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#008542] group-hover:text-white transition-colors">
								<Filter size={24} />
							</div>
							<h3 className="font-bold text-lg mb-3">Operadores</h3>
							<p className="text-sm text-slate-600 leading-relaxed italic mb-4">
								Filtros Dinâmicos.
							</p>
							<p className="text-sm text-slate-500">
								Você pode ordenar os resultados por data de publicação,
								relevância ou volume de citações diretamente no formulário
								abaixo.
							</p>
						</div>

						{/* Card 4: Polite Pool & Performance */}
						<div className="group bg-white p-8 rounded-2xl border border-slate-200 shadow-sm transition-all hover:shadow-md">
							<div className="w-12 h-12 bg-slate-50 border border-slate-100 text-[#008542] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#008542] group-hover:text-white transition-colors">
								<Mail size={24} />
							</div>
							<h3 className="font-bold text-lg mb-3">Identificação</h3>
							<p className="text-sm text-slate-600 leading-relaxed italic mb-4">
								Acesso via Polite Pool.
							</p>
							<p className="text-sm text-slate-500">
								Incluir um e-mail válido nas requisições permite que a OpenAlex
								priorize seu tráfego, resultando em respostas mais rápidas e
								estáveis.
							</p>
						</div>
					</div>

					{/* Banner de detalhe extra (Sub-seção) */}
					<div className="mt-8 bg-[#008542]/5 border border-[#008542]/10 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6">
						<div className="p-3 bg-white rounded-full shadow-sm">
							<Database className="text-[#008542]" size={32} />
						</div>
						<div>
							<h4 className="font-bold text-slate-900">
								Base de Dados Massiva
							</h4>
							<p className="text-sm text-slate-600">
								O mecanismo varre mais de 250 milhões de trabalhos acadêmicos,
								incluindo periódicos, teses e preprints, garantindo uma
								cobertura global da produção científica atualizada diariamente.
							</p>
						</div>
					</div>
				</section>

				{/* 3. Área de Busca - Largura Máxima (7xl) */}
				<section id="search-area">
					<div className="flex items-center justify-between mb-8">
						<h2 className="text-2xl font-bold flex items-center gap-2">
							<div className="h-6 w-2 bg-[#FFD100]"></div>
							Console de Pesquisa
						</h2>
					</div>

					<div className="bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden min-h-[500px]">
						{/* Detalhe visual superior */}
						<div className="h-2 w-full bg-[#008542]"></div>
						<div className="p-6 md:p-12">
							<OpenAlexForm />
						</div>
					</div>
				</section>
			</main>

			<footer className="bg-slate-900 text-slate-400 py-16">
				<div className="max-w-7xl mx-auto px-6 text-center">
					<div className="flex justify-center gap-2 mb-6">
						<div className="h-1 w-12 bg-[#008542]"></div>
						<div className="h-1 w-12 bg-[#FFD100]"></div>
					</div>
					<p className="text-sm font-medium tracking-widest uppercase mb-2">
						Plataforma de Extração de Dados
					</p>
					<p className="text-xs text-slate-500">
						Interface otimizada para integração com sistemas de análise de
						métricas de pesquisa.
					</p>
				</div>
			</footer>
		</div>
	);
}
