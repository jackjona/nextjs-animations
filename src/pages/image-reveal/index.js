// Inspired by: sonsanddaughters.xyz
// Lenis is used here
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import Lenis from "lenis";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function ImageReveal() {
  useEffect(() => {
    const lenis = new Lenis({ autoRaf: true });

    // Recursive animation frame to update Lenis on every frame
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // Clean up with cancelAnimationFrame and lenis.destroy()
    return () => {
      cancelAnimationFrame(rafId);
      if (lenis.destroy) {
        lenis.destroy();
      }
    };
  }, []);

  // Reference for the scroll container
  const scrollRef = useRef(null);

  // Get scroll progress from the specified element
  const { scrollYProgress } = useScroll({ target: scrollRef });

  // Detect if the user prefers reduced motion for accessibility
  const shouldReduceMotion = useReducedMotion();

  // Configure animated clipPath transformation based on scroll progress.
  // If reduced motion is enabled, we use "none" to disable the animation.
  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.9],
    shouldReduceMotion
      ? ["none", "none"]
      : [
          "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, 34% 40%, 34% 83%, 72% 83%, 72% 40%, 32% 40%)",
          "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, 0% 0%, 0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        ]
  );

  // Configure animated slide-up transformation for the heading.
  const slideUp = useTransform(
    scrollYProgress,
    [0, 0.2],
    shouldReduceMotion ? ["0%", "0%"] : ["0%", "-100%"]
  );

  // Configure animated fade-out transformation for the description.
  const fadeOut = useTransform(
    scrollYProgress,
    [0, 0.25],
    shouldReduceMotion ? [1, 1] : [1, 0]
  );

  // Configure animated vertical movement for the background image.
  const imageDown = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : ["-10%", "0%"]
  );

  return (
    <main>
      {/* Scroll container */}
      <div
        ref={scrollRef}
        className="relative h-[230vh] mt-19 bg-[#FAF9F6] text-center"
      >
        <div className="sticky top-0 h-screen">
          {/* Animated background image with parallax effect */}
          <motion.img
            className="absolute inset-0 -z-10 h-screen w-full"
            style={{ y: imageDown }}
            src="https://picsum.photos/1424/960" // Random image
            alt=""
            aria-hidden="true"
          />

          {/* Overlay content with animated clip-path transformation */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center bg-[#FAF9F6] -top-19"
            style={{ clipPath }}
          >
            {/* Heading with slide-up animation */}
            <motion.h1
              className="text-[9vw] font-extrabold uppercase tracking-tighter pt-30"
              style={{ y: slideUp }}
            >
              Expand Image
            </motion.h1>
            {/* Paragraph with fade-out effect */}
            <motion.p
              className="text-2xl font-serif px-2"
              style={{ opacity: fadeOut }}
            >
              Expand and reveal image effect on scroll. Check out{" "}
              <Link href="expanding-box" className="hover:underline">
                /expanding-box
              </Link>{" "}
              for a newer version.
            </motion.p>
          </motion.div>
        </div>
      </div>
      {/* More content section */}
      <div className=" text-4xl h-screen flex flex-col items-center justify-center uppercase font-bold tracking-tighter">
        <h2>More Content...</h2>
      </div>
    </main>
  );
}
