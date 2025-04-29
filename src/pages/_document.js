import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <Header />
      <body className="antialiased bg-[#FAF9F6] dark:bg-slate-900 text-black dark:text-white">
        <Main />
        <NextScript />
      </body>
      <Footer />
    </Html>
  );
}
