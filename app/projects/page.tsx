"use client";

import { useEffect, useState } from "react";

// Interface para mapear a resposta da sua API Java
interface IncidentResponse {
  classification: string;
  suggestion?: string; // Campo que conterá a recomendação da IA
}

export default function Projects() {
  const [apiStatus, setApiStatus] = useState<"checking" | "online" | "offline">(
    "checking",
  );
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<IncidentResponse | null>(null);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetch("https://api-springboot-ia.onrender.com/")
      .then((res) =>
        res.ok ? setApiStatus("online") : setApiStatus("offline"),
      )
      .catch(() => setApiStatus("offline"));
  }, []);

  const handleClassify = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch(
        "https://api-springboot-ia.onrender.com/incidents",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title, description }),
        },
      );

      const data: IncidentResponse = await response.json();

      if (!response.ok) throw new Error("Erro na análise da API");

      setResult(data); // Armazena o objeto completo com a sugestão
      setTitle("");
      setDescription("");
    } catch (error: unknown) {
      console.error("Erro:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen px-6 py-24 max-w-6xl mx-auto">
      {/* ... Cabeçalho de Status (mantido igual aos prints anteriores) ... */}

      <section className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden shadow-2xl p-8">
        <form onSubmit={handleClassify} className="space-y-4">
          <div>
            <label className="text-sm text-slate-400 mb-2 block">
              Título do Incidente:
            </label>
            <input
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white outline-none focus:border-sky-500"
              placeholder="Ex: Falha de Conectividade"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="text-sm text-slate-400 mb-2 block">
              Descrição Detalhada:
            </label>
            <textarea
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-4 text-white outline-none focus:border-sky-500 resize-none"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading || apiStatus === "offline"}
            className="w-full py-3 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-lg transition-all"
          >
            {loading ? "IA Analisando..." : "Testar API"}
          </button>
        </form>

        {/* ÁREA DE RESULTADO COM A SUGESTÃO */}
        {result && (
          <div className="mt-8 space-y-4">
            <div className="p-4 bg-sky-500/10 border-l-4 border-sky-500 rounded-r-lg">
              <span className="text-sky-400 font-mono text-[10px] uppercase font-bold">
                Classificação:
              </span>
              <p className="text-white text-lg font-bold">
                {result.classification}
              </p>
            </div>

            {result.suggestion && (
              <div className="p-4 bg-emerald-500/10 border-l-4 border-emerald-500 rounded-r-lg">
                <span className="text-emerald-400 font-mono text-[10px] uppercase font-bold">
                  Sugestão da IA:
                </span>
                <p className="text-slate-200 mt-1">{result.suggestion}</p>
              </div>
            )}
          </div>
        )}
      </section>
    </main>
  );
}
