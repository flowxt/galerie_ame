import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <header className="container mx-auto px-4 py-4">
      <nav className="flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo-sansfond.png"
            alt="Atelier Art'âme"
            width={120}
            height={60}
            className="h-16 w-auto"
            priority
          />
        </Link>
        <div className="flex space-x-6">
          <Link
            href="/"
            className={`text-gray-600 hover:text-purple-600 transition-colors ${
              isActive("/") ? "font-medium text-purple-700" : ""
            }`}
          >
            Accueil
          </Link>
          <Link
            href="/portrait-d-ame"
            className={`text-gray-600 hover:text-purple-600 transition-colors ${
              isActive("/portrait-d-ame") ? "font-medium text-purple-700" : ""
            }`}
          >
            Portraits d&apos;Âme
          </Link>
          <Link
            href="/attrape-reves"
            className={`text-gray-600 hover:text-purple-600 transition-colors ${
              isActive("/attrape-reves") ? "font-medium text-purple-700" : ""
            }`}
          >
            Attrape-rêves
          </Link>
          <Link
            href="/boutique"
            className={`text-gray-600 hover:text-purple-600 transition-colors ${
              isActive("/boutique") ? "font-medium text-purple-700" : ""
            }`}
          >
            Boutique
          </Link>
          <Link
            href="/contact"
            className={`text-gray-600 hover:text-purple-600 transition-colors ${
              isActive("/contact") ? "font-medium text-purple-700" : ""
            }`}
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
