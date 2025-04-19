import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <header>
        <div className="flex justify-evenly border-b-1 border-black pt-4 pb-2 cursor-pointer w-full text-black">
          <Link
            href="/"
            className="relative after:absolute after:bg-slate-900 after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full transition-all duration-150 after:duration-150 hover:scale-105"
          >
            /
          </Link>
          <Link
            href="/page1"
            className="relative after:absolute after:bg-slate-900 after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full transition-all duration-150 after:duration-150 hover:scale-105"
          >
            Page 1
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
      <body className="antialiased bg-[#FAF9F6]">
        <Main />
        <NextScript />
      </body>
      <footer className="flex p-4 border-t-2 justify-evenly items-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          0
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          1
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          2
        </a>
      </footer>
    </Html>
  );
}
