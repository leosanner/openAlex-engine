import Link from "next/link";
import {
	Database,
	Search,
	ArrowRight,
	BookOpen,
	Settings2,
	LayoutGrid,
	Info,
	ShieldCheck,
	ChevronRight,
} from "lucide-react";

export default function Home() {
	return (
		<div className="min-h-screen bg-white text-slate-900 antialiased font-sans">
			{/* 1. Header com Identidade Forte */}
			<nav className="bg-[#003865] border-b-8 border-[#FFD100] px-8 py-6">
				<div className="max-w-7xl mx-auto flex justify-between items-center">
					<div className="flex items-center gap-4">
						<div>
							<h1 className="text-2xl md:text-3xl font-black text-white tracking-tighter uppercase leading-none">
								Produtos <span className="text-[#FFD100]">IMAI</span>
							</h1>
						</div>
					</div>
					<div className="hidden md:block">
						<span className="bg-white/10 text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-widest border border-white/20">
							Uso Restrito | Petrobras
						</span>
					</div>
				</div>
			</nav>

			<main>
				{/* 2. Banner de Introdução - Fonte Grande e Direta */}
				<section className="bg-slate-50 py-20 px-8 border-b border-slate-200">
					<div className="max-w-7xl mx-auto">
						<div className="max-w-4xl space-y-6">
							<h2 className="text-4xl md:text-5xl font-black text-[#003865] uppercase tracking-tighter leading-tight">
								HUB de ferramentas para pesquisas de <br />
								<span className="text-[#008542] bg-[#008542]/5 px-2">
									avaliação de impacto ambiental
								</span>
							</h2>
							<p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium">
								Utilitários desenvolvidos para auxiliar a equipe técnica na
								coleta, organização e análise de dados científicos.
							</p>
						</div>
					</div>
				</section>

				{/* 3. Seção Principal de Ferramentas - Blocos de Cor */}
				<section className="max-w-7xl mx-auto px-8 py-20">
					<div className="flex items-center gap-4 mb-12">
						<h3 className="text-lg font-black text-[#003865] uppercase tracking-widest flex items-center gap-3">
							<div className="w-8 h-2 bg-[#008542]"></div>
							Ferramentas Disponíveis
						</h3>
					</div>

					<div className="grid lg:grid-cols-12 gap-0 rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
						{/* Card do Buscador (Lado Esquerdo - Cor Sólida) */}
						<div className="lg:col-span-7 bg-white p-10 md:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-slate-100">
							<div className="flex items-center gap-4 mb-8">
								<div className="bg-[#008542] p-4 rounded-2xl shadow-lg shadow-[#008542]/20">
									<Search size={32} className="text-white" />
								</div>
								<h4 className="text-3xl font-black text-[#003865] uppercase tracking-tighter">
									Buscador <br />
									Acadêmico
								</h4>
							</div>

							<p className="text-lg text-slate-600 mb-10 leading-relaxed text-justify">
								Interface para consulta direta à base de dados científica.
								Permite a extração de metadados, aplicação de filtros por
								impacto e organização de referências bibliográficas.
							</p>

							<div className="grid md:grid-cols-2 gap-6 mb-12">
								<div className="flex items-center gap-3 font-bold text-[#003865]">
									<ChevronRight size={20} className="text-[#008542]" />
									<span className="text-sm uppercase tracking-tight">
										Lógica Booleana
									</span>
								</div>
								<div className="flex items-center gap-3 font-bold text-[#003865]">
									<ChevronRight size={20} className="text-[#008542]" />
									<span className="text-sm uppercase tracking-tight">
										Filtros FWCI
									</span>
								</div>
							</div>

							<Link
								href="/search"
								className="
								relative overflow-hidden inline-flex items-center justify-center 
								bg-[#003865] text-white py-5 rounded-xl font-black text-lg uppercase tracking-widest 
								transition-colors duration-500 ease-in-out
								before:absolute before:inset-0 before:bg-[#008542] 
								before:translate-x-[-100%] hover:before:translate-x-0 
								before:transition-transform before:duration-500 before:ease-in-out
								shadow-lg active:scale-[0.98]"
							>
								<span className="relative z-10 px-8">Acessar Ferramenta</span>
							</Link>
						</div>

						{/* Justificativa Técnica (Lado Direito - Azul Petrobras) */}
						<div className="lg:col-span-5 bg-[#003865] p-10 md:p-16 flex flex-col justify-center text-white relative">
							<div className="absolute top-0 right-0 p-8 opacity-10">
								<Database size={120} />
							</div>

							<h4 className="text-xl font-black uppercase tracking-widest mb-8 flex items-center gap-3">
								<Info size={24} className="text-[#FFD100]" />
								Base de Dados
							</h4>

							<div className="space-y-8">
								<div className="border-l-4 border-[#008542] pl-6">
									<p className="text-sm font-bold text-[#FFD100] uppercase mb-2">
										Por que o OpenAlex?
									</p>
									<p className="text-base text-white/80 leading-relaxed font-medium">
										Índice global aberto com mais de{" "}
										<strong>250 milhões</strong> de entidades científicas.
										Escolhido pela transparência e ausência de paywalls.
									</p>
								</div>

								<div className="border-l-4 border-[#008542] pl-6">
									<p className="text-sm font-bold text-[#FFD100] uppercase mb-2">
										Conectividade
									</p>
									<p className="text-base text-white/80 leading-relaxed font-medium">
										Mapeamento completo de relações institucionais e citações,
										essencial para análises de impacto técnico.
									</p>
								</div>
							</div>

							<div className="mt-12 flex items-center gap-2 text-[#FFD100] font-black text-[10px] uppercase tracking-widest">
								<ShieldCheck size={16} /> Status do Serviço: Operacional
							</div>
						</div>
					</div>
				</section>
			</main>

			<footer className="bg-[#003865] py-12 border-t-8 border-[#008542] mt-20">
				<div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
					<div className="flex items-center gap-4 text-white">
						<div className="font-black text-xl tracking-tighter">
							IMAI <span className="text-[#FFD100]">2026</span>
						</div>
						<div className="h-4 w-px bg-white/20"></div>
						<div className="text-[10px] font-bold uppercase tracking-widest text-white/60">
							Suporte Técnico
						</div>
					</div>
					<div className="flex gap-8 text-[10px] font-black text-white/80 uppercase tracking-widest">
						<span className="hover:text-[#FFD100] cursor-pointer transition-colors">
							Petrobras Interno
						</span>
						<span className="hover:text-[#FFD100] cursor-pointer transition-colors">
							Documentação
						</span>
						<span className="hover:text-[#FFD100] cursor-pointer transition-colors">
							Contato
						</span>
					</div>
				</div>
			</footer>
		</div>
	);
}
