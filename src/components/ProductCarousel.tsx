"use client";
import {  useRef } from "react";

import SingleProduct from "./SingleProduct";

import { MdArrowBack, MdArrowForward } from "react-icons/md";

export default function ProductCarousel() {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: string) => {
    if (carouselRef.current) {
      const scrollAmount = 330 * 3; // Scroll by the width of 3 products at once
      if (direction === "left") {
        carouselRef.current.scrollLeft -= scrollAmount;
      } else {
        carouselRef.current.scrollLeft += scrollAmount;
      }
    }
  };
  return (
    <div className=" flex items-center justify-center mt-[80px]">
      <div className="flex flex-col w-[1470px] justify-around gap-[16px]">
        <div className="flex items-center justify-between w-full h-43px">
          <p className="font-inter font-[500] text-[35px] leading-[43px] text-[#393939]">
            Articles similaires
          </p>
          <p className="font-inter text-[16px] leading-[20px] text-[#393939] border-b border-[#393939]">
            Voir toute la collection
          </p>
        </div>

        {/* Left Scroll Button */}
        <button
          className="absolute   z-[30]  transform left-[-5px] bg-[#5cd2dd] p-[10px] "
          onClick={() => scroll("left")}
        >
          <MdArrowBack className="text-white text-[24px]" />
        </button>

        {/* Right Scroll Button */}
        <button
          className="absolute right-[-5px] z-[30]  transform  bg-[#5cd2dd] p-[10px] "
          onClick={() => scroll("right")}
        >
          <MdArrowForward className="text-white text-[24px]" />
        </button>
        <div
          className="relative flex w-[1500px] overflow-x-scroll gap-[10px] flex-nowrap"
          ref={carouselRef}
        >
          {[1, 2, 3, 4, 5].map((_, index) => (
            <SingleProduct width="330px" key={index} bigSize={false} />
          ))}
        </div>
      </div>
    </div>
  );
}
