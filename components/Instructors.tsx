"use client";
import React from "react";
import {WavyBackgrounds}  from "./WavyBackground";

export function Instructors() {
  return (
    <section className="relative w-full overflow-hidden">
      <WavyBackgrounds>
        <div className="p-10">
          <h1 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center">
            Meet Our Instructors
          </h1>
          <p className="mt-4 text-base md:text-lg text-white text-center">
            Learn from industry experts who are passionate about teaching and mentoring.
          </p>
        </div>
      </WavyBackgrounds>
    </section>
  );
}
