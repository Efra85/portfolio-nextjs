import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projetos", href: "/projects" },
  { label: "IA", href: "/ai" },
  { label: "Arquitetura", href: "/architecture" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur bg-slate-950/70 border-b border-slate-800">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-sky-400 tracking-wide">
          Efraim Ortiz
        </Link>

        <ul className="flex gap-6 text-sm">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-slate-300 hover:text-sky-400 transition"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
