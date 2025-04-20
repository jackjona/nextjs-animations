import projectList from "@/data/projectList.json";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className={`grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col justify-center items-center row-start-2 ">
        <h1 className="text-8xl font-bold pb-10">Projects/Animations</h1>

        <div className="flex flex-col cursor-pointer text-2xl">
          {projectList.map(({ name, link, archived }) => (
            <Link
              key={link}
              href={link}
              className="relative after:absolute after:bg-slate-900 after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full transition-all duration-150 after:duration-150 hover:scale-105"
            >
              {name} {archived && "[Archived]"}
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
