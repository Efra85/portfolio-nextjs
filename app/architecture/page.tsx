export default function Architecture() {
  return (
    <main className="min-h-screen px-6 py-24 max-w-6xl mx-auto">
      <h2 className="text-5xl font-bold bg-linear-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
        Arquitetura de Microsserviços
      </h2>

      <p className="mt-8 text-slate-400 max-w-3xl">
        Arquitetura orientada a microsserviços utilizando Java e tecnologias
        cloud-native, com foco em escalabilidade, resiliência e observabilidade.
      </p>

      <section className="mt-16 grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold text-sky-400">Visão Geral</h3>
          <p className="mt-4 text-slate-400">
            Cada microsserviço é responsável por um domínio específico do
            negócio, se comunicando via APIs REST e mensageria, com deploy
            independente.
          </p>

          <ul className="mt-6 space-y-3 text-slate-300">
            <li>✔ Java 17 + Spring Boot</li>
            <li>✔ Spring Cloud</li>
            <li>✔ APIs REST</li>
            <li>✔ Mensageria (Kafka / RabbitMQ)</li>
            <li>✔ Docker & Kubernetes</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-indigo-400">
            Observabilidade & Governança
          </h3>
          <p className="mt-4 text-slate-400">
            Monitoramento, logging e tracing distribuído garantem visibilidade
            completa do sistema em produção.
          </p>

          <ul className="mt-6 space-y-3 text-slate-300">
            <li>✔ Logs centralizados</li>
            <li>✔ Métricas (Prometheus / Grafana)</li>
            <li>✔ Tracing distribuído</li>
            <li>✔ Circuit Breakers</li>
            <li>✔ API Gateway</li>
          </ul>
        </div>
      </section>

      <section className="mt-20">
        <h3 className="text-2xl font-semibold text-fuchsia-400">
          Diagrama de Arquitetura
        </h3>
        <p className="mt-4 text-slate-400">
          Representação visual da arquitetura de microsserviços utilizada nos
          projetos Java apresentados neste portfólio.
        </p>

        <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900/50 p-8 text-center text-slate-500">
          Diagrama será exibido aqui
        </div>
      </section>
    </main>
  );
}
