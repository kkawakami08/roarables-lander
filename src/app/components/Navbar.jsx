"use client";
import { useState } from "react";
import Image from "next/image";
import { HiMenu } from "react-icons/hi";
import NavBarPopOut from "./NavBarPopOut";

export default function Navbar() {
  const [visibility, setVisibility] = useState(false);
  const handleClick = () => {
    setVisibility((prevVisibility) => !prevVisibility);
  };
  const closePopUp = () => {
    setVisibility(false);
  };

  return (
    <div className="relative">
      <NavBarPopOut
        visibility={visibility}
        handleClick={handleClick}
        closePopUp={closePopUp}
      />
      <div className=" p-4 px-8 flex justify-between shadow-lg fixed z-10 bg-white w-full">
        <Image
          src="/img/roarables-branding.png"
          alt="roarables logo"
          width="60"
          height="60"
        />
        <div
          className="bg-brand-red rounded-full w-11 h-11 flex items-center justify-center"
          onClick={handleClick}
        >
          <HiMenu size="1.5rem" color="white" className="" />
        </div>
      </div>
    </div>
  );
}
