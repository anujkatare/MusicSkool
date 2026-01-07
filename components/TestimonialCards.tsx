"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import SplashCursor from '@/components/ui/SplashCursor';
import { Splash } from "next/font/google";

const testimonials = [
  {
    quote:
      "Music gives a soul to the universe, wings to the mind, flight to the imagination, and life to everything.",
    name: "Plato",
    title: "Philosopher",
  },
  {
    quote:
      "One good thing about music, when it hits you, you feel no pain. It has the power to heal, unite, and inspire beyond words.",
    name: "Bob Marley",
    title: "Reggae Legend",
  },
  {
    quote:
      "Without music, life would be a mistake. Music expresses that which cannot be said and on which it is impossible to be silent.",
    name: "Friedrich Nietzsche",
    title: "Philosopher",
  },
  {
    quote:
      "Music can change the world because it can change people. It speaks directly to the heart and shapes emotions in powerful ways.",
    name: "Bono",
    title: "Musician & Activist",
  },
  {
    quote:
      "Where words fail, music speaks. It captures emotions that language alone can never fully express.",
    name: "Hans Christian Andersen",
    title: "Author",
  },
];


export function TestimonialCards() {
  return (
    <div>
     
        <h1 className="text-4xl font-semibold text-black dark:text-white text-center">Hear Our Harmony: Voices of Success</h1>
    <div className="h-40rem top-20 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="fast"
        className="w-full h-100"
      />
    </div>
     
    </div>
  );
}


