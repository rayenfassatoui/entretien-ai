"use client";

import React from "react";
import Image from "next/image";

import { ContainerScroll } from "../ui/container-scroll-animation";

export default function HeroScroll() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Ace your <br />
              <span className="mt-1 text-4xl font-bold leading-none md:text-[6rem]">
                Technical Interviews
              </span>
            </h1>
          </>
        }
      >
        <Image
          src="/_static/landing/shot1.webp"
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto h-full rounded-2xl object-cover object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
