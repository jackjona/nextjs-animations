// pages/index.js
import AnimatedHR from "@/components/AnimateHR";

export default function Page1() {
  return (
    <div class="py-8">
      <h1 className="text-4xl font-bold mx-4">Smooth Reveal HR Animation</h1>
      <div className="my-4">
        <AnimatedHR />
      </div>
      <p className="mt-4 mx-4 text-lg">
        See more of the the animation by scrolling below.
      </p>
      <div className="min-h-screen bg-slate-800 text-white text-lg flex justify-center items-center rounded-2xl my-10 mx-4">
        <p>Other content</p>
      </div>
      <div className="my-10">
        <AnimatedHR />
      </div>
    </div>
  );
}
