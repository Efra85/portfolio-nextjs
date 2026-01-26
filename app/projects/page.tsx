"use client";

import { useEffect, useState } from "react";

// Definimos uma interface para o que o Java retorna
interface IncidentResponse {
  classification: string;
  suggestion?: string; // Campo opcional para a sugestão da IA
  priority?: string;
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

      if (!response.ok) throw new Error("Erro na API");

      setResult(data); // Guardamos o objeto inteiro da resposta
      setTitle("");
      setDescription("");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }

    return (
      <main className="min-h-screen px-6 py-24 max-w-6xl mx-auto">
        {/* ... (cabeçalho permanece igual) ... */}

        <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 shadow-2xl">
          <form onSubmit={handleClassify} className="space-y-4">
            <input
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-white outline-none focus:border-sky-500"
              placeholder="Título do Incidente"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <textarea
              className="w-full bg-slate-950 border border-slate-800 rounded-lg p-4 text-white outline-none focus:border-sky-500 resize-none"
              placeholder="Descreva o incidente..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              required
            />
            <button
              type="submit"
              disabled={loading || apiStatus === "offline"}
              className="w-full py-3 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-lg transition-all"
            >
              {loading ? "IA Analisando..." : "Analisar Incidente"}
            </button>
          </form>

          {/* EXIBIÇÃO DETALHADA DO RESULTADO */}
          {result && (
            <div className="mt-8 space-y-4 animate-in fade-in slide-in-from-top-4">
              <div className="p-4 bg-sky-500/10 border-l-4 border-sky-500 rounded-r-lg">
                <span className="text-sky-400 font-mono text-[10px] uppercase font-bold">
                  Classificação IA:
                </span>
                <p className="text-white text-xl font-bold">
                  {result.classification}
                </p>
              </div>

              {result.suggestion && (
                <div className="p-4 bg-emerald-500/10 border-l-4 border-emerald-500 rounded-r-lg">
                  <span className="text-emerald-400 font-mono text-[10px] uppercase font-bold">
                    Sugestão de Resposta:
                  </span>
                  <p className="text-slate-200 mt-1">{result.suggestion}</p>
                </div>
              )}
            </div>
          )}
        </section>
      </main>
    );
  };
}
