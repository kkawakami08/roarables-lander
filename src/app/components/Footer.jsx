import React from "react";
import {
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineCopyrightCircle,
} from "react-icons/ai";

export default function Footer() {
  return (
    <div className="bg-brand-red text-white p-4 flex flex-col gap-4">
      <div className="grid grid-cols-2 place-items-center text-center gap-2">
        <p>TERMS OF USE & PRIVACY POLICY</p>
        <p>REQUEST ROARABLES</p>
        <p>DOWNLOAD COUPON</p>
        <p>EMAIL</p>
        <p>FAQ</p>
        <p>SHIPPING POLICY</p>
        <p className="col-span-2">CONTACT</p>
      </div>
      <div className="flex gap-5 justify-center">
        <AiOutlineTwitter color="white" size="30" />
        <AiFillFacebook color="white" size="30" />
        <AiFillInstagram color="white" size="30" />
      </div>
      <div className="flex items-center gap-1 justify-center">
        <AiOutlineCopyrightCircle color="white" size="20" className="inline" />
        <p className="text-xs">Copyright 2023 Kaori Roarables Brands, LLC </p>
      </div>
    </div>
  );
}
