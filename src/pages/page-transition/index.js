import Strips from "@/components/Layout/Strips";

export default function Home() {
  return (
    <div className="min-h-screen p-20 flex justify-center items-center">
      <Strips />
      <div className="text-center">
        <h1 className="pb-20 text-6xl font-extrabold uppercase tracking-tighter">
          Page Entrance Animation
        </h1>
        <p className="text-2xl">Refresh to see the entrance animation.</p>
      </div>
    </div>
  );
}
