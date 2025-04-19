import React from "react";
import { motion } from "framer-motion";
import { opacity, expand } from "./anim";

export default function Layout({ children, backgroundColor }) {
  const anim = (variants, custom = null) => {
    return {
      initial: "initial",
      animate: "enter",
      // exit: "exit",
      custom,
      variants,
    };
  };

  const columnNumber = 4;
  return (
    <>
      <motion.div
        {...anim(opacity)}
        className="fixed w-full h-screen bg-black z-[1] pointer-events-none top-0 left-0"
      />
      <div className="fixed w-screen h-screen flex left-0 top-0 pointer-events-none z-[2]">
        {[...Array(columnNumber)].map((_, i) => {
          return (
            <motion.div
              key={i}
              {...anim(expand, columnNumber - i)}
              className="relative h-full w-full bg-slate-900"
            />
          );
        })}
      </div>
      {children}
    </>
  );
}
