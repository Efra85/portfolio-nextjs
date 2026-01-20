import Link from "next/link";

export default function AI() {
  return (
    <main className="min-h-screen px-6 py-24 max-w-6xl mx-auto">
      <h2 className="text-5xl font-bold bg-linear-to-r from-sky-400 to-fuchsia-400 bg-clip-text text-transparent">
        Inteligência Artificial
      </h2>

      <p className="mt-8 text-slate-400 max-w-3xl">
        Aplicação de Inteligência Artificial em sistemas Java com dois focos
        distintos: soluções corporativas robustas e ambientes experimentais de
        inovação.
      </p>

      <div className="mt-16 grid md:grid-cols-2 gap-10">
        <Link
          href="/ai/enterprise"
          className="group rounded-2xl border border-slate-800 p-8 hover:border-sky-500 transition"
        >
          <h3 className="text-2xl font-semibold text-sky-400 group-hover:underline">
            IA Enterprise
          </h3>
          <p className="mt-4 text-slate-400">
            Uso estratégico de IA em ambientes corporativos Java, priorizando
            segurança, custo, escalabilidade e governança.
          </p>
        </Link>

        <Link
          href="/ai/labs"
          className="group rounded-2xl border border-slate-800 p-8 hover:border-fuchsia-500 transition"
        >
          <h3 className="text-2xl font-semibold text-fuchsia-400 group-hover:underline">
            IA Labs
          </h3>
          <p className="mt-4 text-slate-400">
            Experimentos, provas de conceito e exploração de novas ideias com
            IA, focando aprendizado e inovação.
          </p>
        </Link>
      </div>
    </main>
  );
}
