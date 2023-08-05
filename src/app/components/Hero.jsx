import React from "react";
import { HiSparkles } from "react-icons/hi";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-brand-yellow flex items-center flex-col text-center py-6 px-16 gap-8">
      <h2 className="text-5xl font-bold text-white drop-shadow-lg leading-tight">
        ORGANIC, PLANT-BASED COOKIES
      </h2>
      <h3 className="text-brand-purple-light text-3xl font-semibold">
        WHY DITCH COOKIES IF YOU'RE NOT DOING IT RIGHT?
      </h3>
      <p className="text-brand-purple-light text-2xl font-semibold">
        <HiSparkles className="inline" color="white" />
        <span> </span>
        We use the good stuff - Organic ingredients & Calcium, Potassium,
        Vitamins
      </p>
      <p className="text-brand-purple-light text-2xl font-semibold">
        <HiSparkles className="inline" color="white" /> <span> </span>
        But none of the bad stuff - USDA Organic = pesticide-free and
        preservative-free
      </p>
      <p className="text-brand-purple-light text-2xl font-semibold">
        <HiSparkles className="inline" color="white" />
        <span> </span>
        To make delicious stuff - Otherwise, what's the point?
      </p>
      <button className="bg-brand-red text-white py-3 px-8 font-semibold tracking-widest text-xl">
        SHOP ALL
      </button>
      <Image
        src="/img/usda-logo.png"
        alt="usda logo"
        width="200"
        height="200"
      />
      <Image
        src="/img/cookie-6.png"
        alt="cookies"
        width="200"
        height="200"
        className="pb-10 -mt-5"
      />
    </div>
  );
}
