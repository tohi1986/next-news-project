import Logo from "./Logo";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="w-full border-b border-black bg-amber-900">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
}