import React from "react";
import ComparisonTable from "./ComparisonTable";
import Image from "next/image";

export default function MooalaDifference() {
  return (
    <div className=" flex flex-col items-center">
      <h3 className="text-brand-purple text-5xl font-semibold text-center">
        THE MOOALA ORGANIC DIFFERENCE
      </h3>
      <div className="flex flex-col items-center bg-brand-green w-11/12 rounded-lg">
        <div className="flex items-center  justify-end  w-full px-2 relative">
          <Image
            src="/img/roarables-logo.png"
            alt="roarables logo"
            width="150"
            height="150"
            className="rotate-12 absolute -left-5"
          />
          <h4 className="text-white text-3xl font-semibold pr-3 text-right py-8">
            ORGANIC VS. NON-GMO
          </h4>
        </div>
        <ComparisonTable />
        <div className="flex items-center justify-start  w-full relative bg-brand-yellow rounded-b-lg border-2 border-brand-green border-t-0 py-2">
          <p className="text-brand-purple text-xl font-semibold text-center  w-3/4">
            Learn more about the benefits of organic! www.ccof.org/why-organic
          </p>
          <Image
            src="/img/roarables-branding.png"
            alt="roarables brand logo"
            width="110"
            height="110"
            className=" absolute right-1 bottom-1"
          />
        </div>
      </div>
    </div>
  );
}
