import projectList from "@/data/projectList.json";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex flex-col justify-center items-center min-h-screen mx-auto text-center">
        <h1 className="text-7xl font-bold pb-10 break-all ">
          Projects/Animation
        </h1>

        <div className="flex flex-col cursor-pointer text-2xl text-start">
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
    </>
  );
}
