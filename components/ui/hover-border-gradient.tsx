"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/utils";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

interface HoverBorderGradientProps {
  as?: React.ElementType;
  containerClassName?: string;
  className?: string;
  duration?: number;
  clockwise?: boolean;
  children: React.ReactNode;
}

export function HoverBorderGradient({
  as = "button",
  children,
  containerClassName,
  className,
  duration = 1,
  clockwise = true,
  ...props
}: HoverBorderGradientProps & React.HTMLAttributes<HTMLElement>) {
  const [hovered, setHovered] = useState(false);
  const [direction, setDirection] = useState<Direction>("TOP");

  const rotateDirection = (current: Direction): Direction => {
    const dirs: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const index = dirs.indexOf(current);
    return clockwise
      ? dirs[(index - 1 + dirs.length) % dirs.length]
      : dirs[(index + 1) % dirs.length];
  };

  const movingMap: Record<Direction, string> = {
    TOP: "radial-gradient(20.7% 50% at 50% 0%, #fff 0%, rgba(255,255,255,0) 100%)",
    LEFT:
      "radial-gradient(16.6% 43.1% at 0% 50%, #fff 0%, rgba(255,255,255,0) 100%)",
    BOTTOM:
      "radial-gradient(20.7% 50% at 50% 100%, #fff 0%, rgba(255,255,255,0) 100%)",
    RIGHT:
      "radial-gradient(16.2% 41.2% at 100% 50%, #fff 0%, rgba(255,255,255,0) 100%)",
  };

  const highlight =
    "radial-gradient(75% 181% at 50% 50%, #3275F8 0%, rgba(255,255,255,0) 100%)";

  useEffect(() => {
    if (!hovered) {
      const id = setInterval(() => {
        setDirection((prev) => rotateDirection(prev));
      }, duration * 1000);
      return () => clearInterval(id);
    }
  }, [hovered, duration, clockwise]);

  return React.createElement(
    as,
    {
      ...props,
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      className: cn(
        "relative flex rounded-full border bg-black/20 hover:bg-black/10 transition duration-500 dark:bg-white/20 items-center justify-center overflow-visible p-px w-fit",
        containerClassName
      ),
    },
    <>
      {/* Content */}
      <div
        className={cn(
          "relative z-10 bg-black text-white px-4 py-2 rounded-[inherit]",
          className
        )}
      >
        {children}
      </div>

      {/* Animated border */}
      <motion.div
        className="absolute inset-0 z-0 rounded-[inherit]"
        style={{ filter: "blur(2px)" }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered
            ? [movingMap[direction], highlight]
            : movingMap[direction],
        }}
        transition={{ ease: "linear", duration }}
      />

      {/* Inner border */}
      <div className="absolute inset-2px rounded-full bg-black z-1" />
    </>
  );
}
