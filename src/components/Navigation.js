import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <header className="container mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Portraits d&apos;Âme
        </Link>
        <div className="flex space-x-6">
          <Link
            href="/"
            className={`text-gray-600 hover:text-gray-800 ${
              isActive("/") ? "font-medium" : ""
            }`}
          >
            Accueil
          </Link>
          <Link
            href="/portrait-d-ame"
            className={`text-gray-600 hover:text-gray-800 ${
              isActive("/portrait-d-ame") ? "font-medium" : ""
            }`}
          >
            Portraits d&apos;Âme
          </Link>
          <Link
            href="/boutique"
            className={`text-gray-600 hover:text-gray-800 ${
              isActive("/boutique") ? "font-medium" : ""
            }`}
          >
            Boutique
          </Link>
          <Link
            href="/contact"
            className={`text-gray-600 hover:text-gray-800 ${
              isActive("/contact") ? "font-medium" : ""
            }`}
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
