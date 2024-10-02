import { BookOpenText } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center border-b">
      <Link className="flex items-center justify-center" to="/">
        <BookOpenText className="h-6 w-6 mr-2" />
        <span className="font-bold">A Day In The Life</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          to="/about"
        >
          About
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          to="#"
        >
          Random Blog
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          to="/login"
        >
          Share Your Day
        </Link>
      </nav>
    </header>
  );
}