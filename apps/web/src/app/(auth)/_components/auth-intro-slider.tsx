"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Avatar } from "@heroui/react";

const slides = [
  {
    bg: "/background/purple.svg",
    title: "Receive payments anytime, anywhere",
    description:
      "Create custom payment links to accept payments for your community, online stores, events, or gigs with ease.",
    testimonial:
      "Ginger has made receiving payments and dues collections seamless. The platform’s user-friendly interface and secure features give us confidence and ease in managing our finance.",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    name: "Ahmed Olanrewaju",
  },
  {
    bg: "/background/blue.svg",
    title: "Manage finances effortlessly",
    description:
      "Take control of your community or organization's finances with ease and transparency.",
    testimonial:
      "Using Ginger has transformed our approach to managing dues. Everything is streamlined and super intuitive.",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026025e",
    name: "Sarah Johnson",
  },
  {
    bg: "/background/orange.svg",
    title: "Collect donations with trust",
    description:
      "Make donation collection easier for non-profits, mosques, and churches while ensuring accountability.",
    testimonial:
      "The transparency Ginger offers has significantly boosted trust among our donors.",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026026f",
    name: "Michael Brown",
  },
  {
    bg: "/background/black.svg",
    title: "Boost community engagement",
    description:
      "Create stronger connections with your community through simplified fundraising processes.",
    testimonial:
      "Our community’s engagement skyrocketed after we switched to Ginger!",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026027g",
    name: "Linda Walker",
  },
];

export default function AuthIntroSlider() {
  const [current, setCurrent] = useState(0);

  // Preload images on mount
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();

      img.src = slide.bg;
    });
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 15000); // Change every 15 sec

    return () => clearInterval(interval);
  }, []);

  // Framer Motion Variants for Staggered Animation
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3, // Stagger each element by 0.3s
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="hidden sm:flex w-1/2 bg-background text-white relative items-center justify-center">
      <div
        className="w-full h-full p-10 bg-cover lg:bg-contain bg-center bg-no-repeat py-20"
        style={{ backgroundImage: `url(${slides[current].bg})` }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            animate="visible"
            className="w-full h-full flex flex-col justify-between"
            exit={{ opacity: 0 }}
            initial="hidden"
            variants={containerVariants}
          >
            <div className="w-full sm:max-w-sm md:max-w-md lg:max-w-md xl:max-w-lg flex-grow flex flex-col justify-center">
              {/* Title */}
              <motion.h2
                className="sm:text-xl lg:text-2xl xl:text-4xl font-bold mb-4 w-full max-w-sm"
                variants={itemVariants}
              >
                {slides[current].title}
              </motion.h2>

              {/* Description */}
              <motion.p className="text-lg mb-8" variants={itemVariants}>
                {slides[current].description}
              </motion.p>
            </div>

            {/* Testimonial Card */}
            <motion.div
              className="bg-white dark:bg-gray-900/90 text-foreground p-6 rounded-xl shadow-lg mb-20 2xl:mb-40"
              // variants={itemVariants}
            >
              <motion.p className="mb-4" variants={itemVariants}>
                {slides[current].testimonial}
              </motion.p>
              <motion.div
                className="flex items-center gap-3"
                variants={itemVariants}
              >
                <Avatar src={slides[current].avatar} />
                <span className="font-semibold">{slides[current].name}</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
