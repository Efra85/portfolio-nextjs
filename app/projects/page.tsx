export default function Projects() {
  return (
    <main className="min-h-screen px-6 py-24 max-w-6xl mx-auto">
      {/* Título Principal com destaque */}
      <h2 className="text-4xl font-bold text-sky-400 mb-6">
        | Projetos Java |
      </h2>

      <div className="mb-6">
        <h3 className="text-2xl font-bold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
          API Rest + IA
        </h3>
      </div>

      <p className="text-slate-400 leading-relaxed">
        Projeto focado em microsserviços Java (API Rest) e uso responsável de
        Inteligência Artificial.
      </p>

      {/* --- Card do Projeto Incident API --- */}
      <section className="mt-12 bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
        <div className="p-8 text-center border-b border-slate-800 bg-slate-900/80">
          <h3 className="text-2xl font-bold text-white flex items-center justify-center gap-2">
            <span className="text-sky-400">🔹</span> Incident Classification API
          </h3>
          <p className="mt-2 text-slate-400 font-medium">
            Solução robusta de backend para gestão e análise inteligente de
            incidentes de segurança.
          </p>
        </div>

        <div className="p-8 space-y-8">
          {/* Box de Destaque / Descrição Técnica */}
          <div className="bg-sky-500/5 p-6 rounded-lg border-l-4 border-sky-500 text-slate-300 leading-relaxed italic">
            Esta API REST, desenvolvida com{" "}
            <strong>Java 17 e Spring Boot</strong>, automatiza o registro e a
            classificação de incidentes utilizando{" "}
            <strong>Inteligência Artificial</strong>. O diferencial do sistema
            reside na sua resiliência através de um mecanismo de{" "}
            <strong>fallback local</strong>.
          </div>

          {/* Card Interno de Links */}
          <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-6 hover:border-sky-500/50 transition-all group">
            <h3 className="text-xl font-semibold text-sky-400 group-hover:text-sky-300 transition-colors">
              Detalhes da Implementação
            </h3>

            <ul className="text-sm text-zinc-400 mt-4 grid grid-cols-1 md:grid-cols-2 gap-2">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-sky-500 rounded-full"></span>
                Java 17 + Spring Boot
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-sky-500 rounded-full"></span>
                IA aplicada a sistemas corporativos
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-sky-500 rounded-full"></span>
                Fallback local inteligente
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-sky-500 rounded-full"></span>
                Swagger / H2 / JPA
              </li>
            </ul>

            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="http://localhost:8080/swagger-ui.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 text-sm font-medium bg-zinc-800 text-white rounded-lg hover:bg-sky-600 transition-all border border-zinc-700"
              >
                Documentação Swagger
              </a>

              <a
                href="https://github.com/Efra85/API-SpringBoot-IA"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 text-sm font-medium bg-zinc-800 text-white rounded-lg hover:bg-sky-600 transition-all border border-zinc-700"
              >
                Repositório GitHub
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Tecnologias */}
            <div>
              <h4 className="text-white font-semibold flex items-center gap-2 mb-4 border-b border-slate-800 pb-2">
                🛠 Tecnologias
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Java 17",
                  "Spring Boot",
                  "Spring Data JPA",
                  "H2",
                  "Swagger",
                  "JUnit 5",
                  "Mockito",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-sky-500/10 text-sky-400 text-xs font-mono rounded-md border border-sky-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Funcionalidades */}
            <div>
              <h4 className="text-white font-semibold flex items-center gap-2 mb-4 border-b border-slate-800 pb-2">
                ⚙️ Funcionalidades
              </h4>
              <ul className="text-slate-400 space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-sky-500 rotate-45"></div>
                  Registro e listagem de incidentes
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-sky-500 rotate-45"></div>
                  Análise preditiva de severidade
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-sky-500 rotate-45"></div>
                  Recomendações técnicas automáticas
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-sky-500 rotate-45"></div>
                  Mecanismo de resiliência inteligente
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="p-4 bg-slate-900/80 text-center border-t border-slate-800">
          <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">
            Foco em Arquitetura Limpa e Resiliência Corporativa
          </p>
        </div>
      </section>
    </main>
  );
}
