import Link from "next/link";
import projectList from "@/data/projectList.json";

export default function Header() {
  return (
    <header>
      <div className="flex justify-evenly border-b-1 border-black dark:border-white pt-4 pb-2 cursor-pointer w-full  text-black dark:text-white">
        <Link
          href="/"
          className="relative after:absolute after:bg-slate-900 after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full transition-all duration-150 after:duration-150 hover:scale-105"
        >
          Home
        </Link>
        {projectList
          .filter(({ header }) => header) // check if header is true
          .map(({ name, link, archive }) => (
            <Link
              key={link}
              href={link}
              className="relative after:absolute after:bg-slate-900 after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full transition-all duration-150 after:duration-150 hover:scale-105"
            >
              {name}
            </Link>
          ))}
      </div>
    </header>
  );
}
