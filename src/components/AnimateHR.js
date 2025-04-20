"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AnimatedHR() {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <motion.hr
      ref={ref}
      initial={{ width: "0%" }}
      animate={{ width: inView ? "100%" : "0%" }}
      transition={{
        duration: 1,
        delay: 0.25,
        ease: [0.25, 0.8, 0.25, 1],
      }}
      className="border-t-2 border-black"
      aria-hidden="true"
    />
  );
}
