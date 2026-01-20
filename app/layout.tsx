import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Efraim Corrêa Ortiz | Java, Cloud & AI",
  description: "Java, Microservices, Cloud and Artificial Intelligence",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-slate-950 text-slate-100 antialiased">
        <Navbar />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
