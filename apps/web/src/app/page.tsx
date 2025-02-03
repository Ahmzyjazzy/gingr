"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "@gingr/ui";
import { Link } from "@heroui/link";

const slides = [
  {
    title: "Receive payments anytime, anywhere",
    description:
      "Create custom payment links to accept payments for gigs, events, or online stores with ease.",
    image: "/icons/onboarding/globe.svg",
    color: "bg-ginger-blue",
  },
  {
    title: "Simplify dues and donations collection",
    description:
      "Start fundraising for mosques, churches, organizations, or communities. Keep it organized and transparent.",
    image: "/icons/onboarding/donation.svg",
    color: "bg-ginger-orange",
  },
  {
    title: "Reach your financial goals with Spaces.",
    description:
      "Save together with friends, family, or coworkers. Spaces make group savings and expense tracking seamless.",
    image: "/icons/onboarding/savings.svg",
    color: "bg-ginger-purple",
  },
  {
    title: "Split one-off bills and group expenses",
    description:
      "Effortlessly share costs for trips, dinners, and group activities. Simplify expense splitting.",
    image: "/icons/onboarding/split.svg",
    color: "bg-ginger-red",
  },
  {
    title: "Redeem Gifts and Rewards",
    description:
      "Claim vouchers, gifts, and rewards easily— from food coupons to event passes, giveaways, and more.",
    image: "/icons/onboarding/gift.svg",
    color: "bg-ginger-black",
  },
];

export default function OnboardingSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  // Auto-slide
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => nextSlide(), 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Mobile Swipe Detection
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStartX.current) return;

    const touchEndX = e.touches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();

    touchStartX.current = null;
  };

  return (
    <div
      className="relative w-screen h-screen overflow-hidden"
      onTouchMove={handleTouchMove}
      onTouchStart={handleTouchStart}
    >
      {/* Background Color Transition */}
      <AnimatePresence mode="sync">
        <motion.div
          key={slides[currentIndex].color}
          animate={{ opacity: 1 }}
          className={`absolute inset-0 ${slides[currentIndex].color}`}
          exit={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Progress Indicator */}
      <div className="absolute top-8 lg:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className="relative w-12 h-1 bg-gray-300 rounded overflow-hidden"
          >
            {index === currentIndex && (
              <motion.div
                animate={{ width: isPaused ? "0%" : "100%" }} // Stop animation when paused
                className="absolute left-0 top-0 h-full bg-white"
                initial={{ width: 0 }}
                transition={{
                  duration: 5,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Slide Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-lg text-white space-y-6 flex flex-col items-center"
            exit={{ opacity: 0, y: -20 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <h1 className="text-4xl font-bold">{slides[currentIndex].title}</h1>
            <p className="text-lg">{slides[currentIndex].description}</p>
            <Image
              priority
              alt={slides[currentIndex].title}
              height={280}
              src={slides[currentIndex].image}
              width={280}
            />
          </motion.div>
        </AnimatePresence>

        {/* Buttons */}
        <div className="mt-8 w-full max-w-xs space-y-4">
          <Button className="bg-white text-black font-medium w-full">
            I&apos;m new to Ginger
          </Button>
          <Link className="text-white" href="/">
            I already have an account
          </Link>
        </div>
      </div>
    </div>
  );
}
