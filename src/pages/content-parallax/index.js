// Based on: https://www.youtube.com/watch?v=UUhoCb5nagY
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const IMG_PADDING = 12; // Padding for the sticky image sections

// Display a full-width image that scales down slightly as the user scrolls.
const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"], // Tracks movement of the element within the viewport
  });

  // Animates the image scale based on scroll progress
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  return (
    <motion.div
      ref={targetRef}
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`, // Adjust height dynamically
        top: IMG_PADDING,
        scale, // Apply scaling effect
      }}
      className="sticky z-0 rounded-3xl overflow-hidden"
    >
      {/* Dark image overlay */}
      <motion.div className="absolute inset-0 bg-neutral-950/70" />
    </motion.div>
  );
};

// Displays the section text with a parallax movement vertically on scroll.
const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"], // Text moves into view as it scrolls
  });

  // Animates vertical movement based on scroll progress
  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.75], [0, 1]);

  return (
    <motion.div
      ref={targetRef}
      style={{ y, opacity }} // Apply animations
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="text-xl md:text-3xl mb-2 md:mb-4">{subheading}</p>
      <p className="text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const TextParallaxContent = ({
  imgUrl,
  subheading,
  heading,
  contentHeading,
  contentText,
  buttonText,
  link,
}) => (
  <div className="px-3">
    {/* Parallax scrolling section */}
    <div className="relative h-[150vh]">
      <StickyImage imgUrl={imgUrl} />
      <OverlayCopy heading={heading} subheading={subheading} />
    </div>

    {/* Additional content below the parallax section */}
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12">
      <h2 className="col-span-1 text-3xl font-bold">{contentHeading}</h2>
      <div className="col-span-1 md:col-span-8">
        <p className="mb-4 text-xl text-neutral-600 dark:text-neutral-300 md:text-2xl pb-10">
          {contentText}
        </p>
        <a
          href={link}
          className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white hover:bg-neutral-700 md:w-fit"
        >
          {buttonText} <span>↗</span>
        </a>
      </div>
    </div>
  </div>
);

export default function ContentParallax() {
  // The data for the sections
  const parallaxSections = [
    {
      imgUrl:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop",
      subheading: "Collaborate",
      heading: "Built for all of us.",
      contentHeading: "Teamwork at its best",
      contentText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, blanditiis soluta eius quam modi aliquam quaerat odit deleniti minima maiores voluptate est ut saepe accusantium maxime doloremque nulla consectetur possimus.",
      buttonText: "Learn More",
      link: "#",
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=2564&auto=format&fit=crop",
      subheading: "Quality",
      heading: "Never compromise.",
      contentHeading: "Excellence in every step",
      contentText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, blanditiis soluta eius quam modi aliquam quaerat odit deleniti minima maiores voluptate est ut saepe accusantium maxime doloremque nulla consectetur possimus.",
      buttonText: "Discover",
      link: "#",
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1504610926078-a1611febcad3?q=80&w=2416&auto=format&fit=crop",
      subheading: "Modern",
      heading: "Dress for the best.",
      contentHeading: "Elegance Redefined",
      contentText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, blanditiis soluta eius quam modi aliquam quaerat odit deleniti minima maiores voluptate est ut saepe accusantium maxime doloremque nulla consectetur possimus.",
      buttonText: "Explore",
      link: "#",
    },
  ];

  return (
    <div className="">
      {/* Header Section */}
      <div className="flex flex-col justify-center px-20 py-20 text-center">
        <h1 className="text-6xl font-extrabold uppercase tracking-tighter">
          Content Parallax
        </h1>
        <h2 className="pt-4">
          Based on:{" "}
          <a
            className="hover:underline"
            href="https://www.youtube.com/watch?v=UUhoCb5nagY"
            target="_blank" // Good practice to add target="_blank" for external links
            rel="noopener noreferrer" // Security measure for target="_blank"
          >
            Tom Is Loading's Tutorial
          </a>
        </h2>
      </div>

      {/* Mapping over sections to render each parallax component dynamically */}
      {parallaxSections.map((section, index) => (
        <TextParallaxContent key={index} {...section} />
      ))}
    </div>
  );
}
