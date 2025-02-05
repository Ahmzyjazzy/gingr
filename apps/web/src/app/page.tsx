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
  const [showOverlay, setShowOverlay] = useState<"pause" | "play" | null>(null);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const [progress, setProgress] = useState(0);
  const animationFrame = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const pausedTimeRef = useRef<number>(0); // Store the last progress before pause

  // Auto-slide
  useEffect(() => {
    if (isPaused) {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
        animationFrame.current = null;
      }

      return;
    }

    let startTime = Date.now() - pausedTimeRef.current; // Resume from last progress

    startTimeRef.current = startTime;
    const duration = 5000; // 5 seconds

    const updateProgress = () => {
      const elapsedTime = Date.now() - startTime;
      const newProgress = Math.min((elapsedTime / duration) * 100, 100);

      if (newProgress >= 100) {
        setProgress(0);
        pausedTimeRef.current = 0; // Reset pause state
        nextSlide();
      } else {
        setProgress(newProgress);
        animationFrame.current = requestAnimationFrame(updateProgress);
      }
    };

    animationFrame.current = requestAnimationFrame(updateProgress);

    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
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

  useEffect(() => {
    if (isPaused) {
      pausedTimeRef.current = progress * 50; // Store progress in milliseconds
    }
  }, [isPaused]);

  return (
    <div
      aria-hidden="true"
      className="relative w-screen h-screen flex flex-col space-y-10"
      onClick={() => {
        setIsPaused((prev) => {
          const newPausedState = !prev;

          setShowOverlay(newPausedState ? "pause" : "play");
          setTimeout(() => setShowOverlay(null), 800); // Hide after 800ms

          return newPausedState;
        });
      }}
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
      <div className="mt-8 mx-auto flex justify-between items-center w-full max-w-xs">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className="relative w-8 lg:w-12 h-1 bg-gray-300 rounded overflow-hidden"
            >
              {index === currentIndex && (
                <motion.div
                  animate={{ width: `${progress}%` }}
                  className="absolute left-0 top-0 h-full bg-white"
                  initial={{ width: 0 }}
                  transition={{ duration: 0.2, ease: "linear" }}
                />
              )}
            </div>
          ))}
        </div>
        <Link className="text-white" href="/">
          Skip
        </Link>
      </div>

      {/* Slide Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-lg text-white space-y-6 flex flex-col items-center"
            exit={{ opacity: 0, y: -20 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
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
            {/* Buttons */}
            <div className="my-24 w-full max-w-xs space-y-4 mx-auto">
              <Button className="bg-white text-black font-medium w-full">
                I&apos;m new to Ginger
              </Button>
              <Link className="text-white justify-center w-full" href="/">
                I already have an account
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {showOverlay && (
        <motion.div
          key={showOverlay}
          animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 1] }}
          className="absolute inset-0 flex items-center justify-center z-20"
          initial={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="bg-black bg-opacity-50 rounded-full p-6">
            {showOverlay === "pause" ? (
              <div className="w-12 h-12 flex items-center justify-center text-white text-5xl font-bold">
                ❚❚
              </div>
            ) : (
              <div className="w-12 h-12 flex items-center justify-center text-white text-5xl font-bold">
                ▶
              </div>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
}
