import React from "react";
import Image from "next/image";

export default function RecipePost({ imgSrc, caption }) {
  return (
    <div className="border-2 border-brand-blue-light flex flex-col items-center gap-5 pb-5">
      <Image
        src={`/img/${imgSrc}.png`}
        alt={`${imgSrc}`}
        width="300"
        height="300"
      />
      <p className="">{caption}</p>
      <button className="bg-brand-green-light text-white py-2 px-4 tracking-widest self-end mr-5 text-xs">
        READ MORE
      </button>
    </div>
  );
}
