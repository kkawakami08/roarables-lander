import React from "react";
import Image from "next/image";
import { TbBrandPeanut } from "react-icons/tb";
import { BsSlashLg } from "react-icons/bs";
import { GiMuscleUp } from "react-icons/gi";
import { SlEnergy } from "react-icons/sl";

export default function Ingredients() {
  return (
    <div className="bg-brand-yellow flex-col items-center flex gap-8 px-8 py-8">
      <h3 className="text-white text-5xl font-semibold">NUT-FREE COOKIES?</h3>
      <Image
        src="/img/hero-img.png"
        alt="cookies"
        width="500"
        height="500"
        className="-mt-8 -mb-5"
      />
      <p className="text-brand-purple font-semibold text-2xl tracking-wider text-center">
        Yes, we did that. Organic bananas, organic sunflower seeds, and a dash
        of cinnamon creates an aroma of freshly-baked banana bread and a flavor
        so mild and creamy that it meshes perfeectly with cereal, smoothies,
        baked goods, or by the glass. C'mon, be bananas with us.
      </p>
      <div className="flex justify-between   items-start py-3 ">
        <div className="flex flex-col items-center justify-center gap-2 w-1/3">
          <div className="relative bg-white w-20 h-20 rounded-full flex items-center justify-center">
            <BsSlashLg className="absolute text-brand-red" size="3.5em" />
            <TbBrandPeanut size="4em" className="text-brand-red rotate-45" />
          </div>
          <div>
            <p className="font-bold text-2xl">NUT</p>
            <p className="text-xl -mt-1">FREE</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 w-1/3">
          <div className="relative bg-white w-20 h-20 rounded-full flex items-center justify-center">
            <GiMuscleUp size="3em" className="text-brand-red " />
          </div>
          <div className="text-center">
            <p className="font-bold text-2xl">CALCIUM</p>
            <p className="text-xl -mt-1">FOR STRONG BONES</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 w-1/3">
          <div className="relative bg-white w-20 h-20 rounded-full flex items-center justify-center">
            <SlEnergy size="3em" className="text-brand-red " />
          </div>
          <div className="text-center">
            <p className="font-bold text-2xl">POTASSIUM</p>
            <p className="text-xl -mt-1">350mg PER SERVING</p>
          </div>
        </div>
      </div>
      <button className="bg-brand-red text-white py-3 px-8 font-semibold tracking-widest text-xl ">
        SHOP
      </button>
      <button className="bg-brand-red text-white py-3 px-8 font-semibold tracking-widest text-xl">
        LEARN MORE
      </button>
    </div>
  );
}
