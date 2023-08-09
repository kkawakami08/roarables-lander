import React from "react";
import Image from "next/image";

export default function Supporters() {
  return (
    <div className="bg-brand-red flex flex-col items-center gap-10 py-14 px-8">
      <h3
        className="text-white text-4xl font-bold 
      text-center"
      >
        WE'RE THE TALK OF THE TOWN
      </h3>
      <div className="grid grid-cols-3 items-center justify-items-center ">
        <Image
          src="/img/now-this-logo.png"
          alt="now this logo"
          width="125"
          height="125"
        />
        <Image
          src="/img/food-network-logo.png"
          alt="now this logo"
          width="100"
          height="100"
        />
        <Image
          src="/img/nbc-logo.png"
          alt="now this logo"
          width="100"
          height="100"
        />
        <Image
          src="/img/abc-logo.png"
          alt="now this logo"
          width="100"
          height="100"
        />
        <Image
          src="/img/whole-foods-logo.png"
          alt="now this logo"
          width="100"
          height="100"
        />
        <Image
          src="/img/today-show-logo.png"
          alt="now this logo"
          width="100"
          height="100"
        />
      </div>
      <button className="bg-white text-brand-red py-2 px-4 tracking-widest text-xl mt-5">
        CHECK IT OUT
      </button>
    </div>
  );
}
