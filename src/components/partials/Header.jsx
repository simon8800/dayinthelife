import { BookOpenText } from "lucide-react";

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <a className="flex items-center justify-center" href="#">
        <BookOpenText className="h-6 w-6 mr-2" />
        <span className="font-bold">A Day In The Life</span>
      </a>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <a
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          About
        </a>
        <a
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          Random Blog
        </a>
        <a
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          Share Your Day
        </a>
      </nav>
    </header>
  );
}
