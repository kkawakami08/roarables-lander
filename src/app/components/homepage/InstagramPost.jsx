import React from "react";
import Image from "next/image";
import { BsFillPlayFill } from "react-icons/bs";

export default function InstagramPost({ imgSrc }) {
  return (
    <div className="relative bg-blue-500">
      <Image
        src={`/img/${imgSrc}.png`}
        alt={`${imgSrc}`}
        width="300"
        height="300"
        className=""
      />
      <BsFillPlayFill
        color="white"
        className="absolute left-28 top-1/3"
        size="100"
      />
    </div>
  );
}
