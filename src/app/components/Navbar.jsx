import React from "react";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="bg-brand-green p-3">
      <Image
        src="/img/roarables-branding.png"
        alt="me"
        width="50"
        height="50"
      />
    </div>
  );
}
