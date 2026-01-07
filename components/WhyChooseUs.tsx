"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";


export function WhyChooseUs() {
  return (
    <div className="flex flex-col overflow-hidden">
      
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Why Choose Us? <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Because Quality Matters.
              </span>
            </h1>
          </>
        }
      >
        <img
          src={"https://template.canva.com/EAGQ4ltSamY/1/0/1600w-1PPkG53bQm4.jpg"}
          alt="hero"
          height={633}
          width={1200}
          className="mx-auto rounded-2xl bg-amber-600 object-cover h-full object-top-left"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
