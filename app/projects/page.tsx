export default function Projects() {
  return (
    <main className="min-h-screen px-6 py-24 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-sky-400">| Projetos Java |</h2>
      <div>
        <br></br>
        <h3 className="text-2xl font-bold text-shadow-white">API Rest + IA</h3>
      </div>
      <p className="mt-6 text-slate-400">
        Projeto focado em microsserviços Java (API Rest), e uso responsável de
        Inteligência Artificial.
      </p>
      {/* --- Card do Projeto Incident API --- */}
      <section className="mt-12 bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden">
        <div className="p-8 text-center border-b border-slate-800">
          <h3 className="text-2xl font-bold text-white flex items-center justify-center gap-2">
            <span className="text-sky-400">🔹</span> Incident Classification API
          </h3>
          <p className="mt-2 text-slate-400 font-medium">
            Solução robusta de backend para gestão e análise inteligente de
            incidentes de segurança.
          </p>
        </div>

        <div className="p-8">
          <div className="bg-slate-800/40 p-6 rounded-lg border-l-4 border-sky-500 text-slate-300 leading-relaxed italic">
            Esta API REST, desenvolvida com{" "}
            <strong>Java 17 e Spring Boot</strong>, automatiza o registro e a
            classificação de incidentes utilizando{" "}
            <strong>Inteligência Artificial</strong>. O diferencial do sistema
            reside na sua resiliência: através de um mecanismo de{" "}
            <strong>fallback local</strong>, a classificação permanece
            operacional mesmo em caso de indisponibilidade de serviços externos
            de IA.
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {/* Tecnologias */}
            <div>
              <h4 className="text-white font-semibold flex items-center gap-2 mb-4">
                🛠 Tecnologias
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Java 17",
                  "Spring Boot",
                  "Spring Data JPA",
                  "H2 Database",
                  "Swagger",
                  "JUnit 5",
                  "Mockito",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-sky-500/10 text-sky-400 text-xs font-mono rounded-full border border-sky-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Funcionalidades */}
            <div>
              <h4 className="text-white font-semibold flex items-center gap-2 mb-4">
                ⚙️ Funcionalidades
              </h4>
              <ul className="text-slate-400 space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-sky-500">•</span> Registro e listagem de
                  incidentes
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-500">•</span> Análise preditiva de
                  severidade
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-500">•</span> Recomendações técnicas
                  automáticas
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-500">•</span> Mecanismo de
                  resiliência inteligente
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="p-6 bg-slate-800/20 text-center border-t border-slate-800">
          <p className="text-xs text-slate-500 italic">
            📌 Projeto desenvolvido para simular um cenário real de backend
            corporativo, com foco rigoroso em arquitetura limpa e resiliência.
          </p>
        </div>
      </section>
    </main>
  );
}
