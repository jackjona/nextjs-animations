import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="flex justify-evenly border-b-1 border-black pt-4 pb-2 cursor-pointer w-full text-black">
        <Link
          href="/"
          className="relative after:absolute after:bg-slate-900 after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full transition-all duration-150 after:duration-150 hover:scale-105"
        >
          Home
        </Link>
        <Link
          href="/hr"
          className="relative after:absolute after:bg-slate-900 after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full transition-all duration-150 after:duration-150 hover:scale-105"
        >
          Hr Animation
        </Link>
        <Link
          href="/projects"
          className="relative after:absolute after:bg-slate-900 after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full transition-all duration-150 after:duration-150 hover:scale-105"
        >
          Projects
        </Link>
        <Link
          href="/about"
          className="relative after:absolute after:bg-slate-900 after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full transition-all duration-150 after:duration-150 hover:scale-105"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="transition-all relative after:absolute after:bg-black after:h-0.5 after:w-0 after:duration-150 after:bottom-0 after:left-0 hover:after:w-full"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
