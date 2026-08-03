import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="text-black text-xl font-bold flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

      <div className="flex flex-col gap-3 md:flex-row">
        <Link href="/">
          Home
        </Link>

        <span className="text-amber-400">|</span>

        <Link href="/news">
          News
        </Link>

        <span className="text-amber-400">|</span>

        <Link href="/extras">
        Extras
        </Link>
        
      </div>
    </nav>
  );
}