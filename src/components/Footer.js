import Link from "next/link";
import projectList from "@/data/projectList.json";

export default function Footer() {
  return (
    <footer className="m-10">
      <div className="flex p-4 justify-evenly items-center rounded-2xl bg-slate-900 text-white">
        {projectList
          .filter(({ header }) => header) // check if header is true
          .map(({ name, link, archive }) => (
            <Link
              key={link}
              href={link}
              className="hover:underline hover:underline-offset-4"
            >
              {name}
            </Link>
          ))}
      </div>
    </footer>
  );
}
