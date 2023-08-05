import React from "react";
import Image from "next/image";
import { HiMenu } from "react-icons/hi";

export default function Navbar() {
  return (
    <div className=" p-3 flex justify-between shadow-lg fixed z-10 bg-white w-full">
      <Image
        src="/img/roarables-branding.png"
        alt="roarables logo"
        width="60"
        height="60"
      />
      <div className="bg-brand-red rounded-full w-11  flex items-center justify-center">
        <HiMenu size="1.5rem" color="white" className="" />
      </div>
    </div>
  );
}
