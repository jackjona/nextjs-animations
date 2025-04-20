import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { useRef, useState } from "react";

export default function ExpandingBox() {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: scrollRef });

  const [showImage, setShowImage] = useState(true);

  // Check if user prefers reduced motion - accessibility
  const shouldReduceMotion = useReducedMotion();

  // Animate width & height - the size of the initial and final box can be adjusted here
  const size = shouldReduceMotion
    ? "50vw"
    : useTransform(scrollYProgress, [0, 1], ["50vw", "90vw"]);

  // Configure animated slide-up transformation for the heading.
  const slideUp = useTransform(
    scrollYProgress,
    [0, 0.2],
    shouldReduceMotion ? ["0%", "0%"] : ["0%", "-100%"]
  );

  // Animate text opacity and movement
  const textOpacity = shouldReduceMotion
    ? 1
    : useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const textTranslateY = shouldReduceMotion
    ? "0px"
    : useTransform(scrollYProgress, [0, 0.5], ["0px", "-50px"]);

  return (
    <main>
      {/* Scroll container */}
      <div ref={scrollRef} className="relative h-[200vh]">
        <div className="text-center pt-20">
          {/* Animate the heading out on scroll */}
          <motion.h1
            className="text-6xl font-extrabold uppercase tracking-tighter"
            style={{ y: slideUp }}
          >
            Expanding Box
          </motion.h1>
          <motion.p
            className="pt-4 text-2xl"
            style={{ opacity: textOpacity, y: textTranslateY }}
          >
            A responsive expanding box/image scroll animation
          </motion.p>

          {/* Button to toggle between box and image */}
          <motion.button
            className="mt-4 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded cursor-pointer"
            onClick={() => setShowImage((prev) => !prev)}
            style={{ opacity: textOpacity, y: textTranslateY }}
          >
            Toggle Box/Image
          </motion.button>
        </div>

        <div className="sticky top-0 h-screen flex justify-center items-center">
          {showImage ? (
            <motion.img
              style={{ width: size, height: size }}
              src="https://picsum.photos/1424/960" // Random image
              alt="Random"
              aria-hidden="true"
            />
          ) : (
            <motion.div
              className="bg-blue-500 rounded-md"
              style={{ width: size, height: size }}
            />
          )}
        </div>
      </div>

      {/* More content section */}
      <div className="text-4xl text-center flex justify-center h-screen mt-[20vw] uppercase font-bold tracking-tighter">
        <h2>More Content...</h2>
      </div>
    </main>
  );
}
