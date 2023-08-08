import React from "react";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

export default function ComparisonTable() {
  return (
    <div className="table w-full bg-white border-brand-green border-2 border-b-0">
      <div className="table-header-group">
        <div className="table-row">
          <div className="table-cell font-bold text-md w-7/12 p-4">
            What do these labels really mean?
          </div>
          <div className="table-cell text-center font-extrabold text-lg text-brand-green ">
            Organic
          </div>
          <div className="table-cell text-center font-extrabold text-lg text-brand-green  ">
            Non-GMO
          </div>
        </div>
      </div>
      <div className="table-row-group ">
        <div className="table-row odd:bg-brand-blue-light">
          <div className="table-cell p-4">GMO use prohibited</div>
          <div className="table-cell ">
            <AiOutlineCheck color="green" className="mx-auto" />
          </div>
          <div className="table-cell ">
            <AiOutlineCheck color="green" className="mx-auto" />
          </div>
        </div>
        <div className="table-row odd:bg-brand-blue-light">
          <div className="table-cell p-4">
            No artificial colors, flavors, or preservatives
          </div>
          <div className="table-cell ">
            <AiOutlineCheck color="green" className="mx-auto" />
          </div>
          <div className="table-cell ">
            <AiOutlineClose color="red" className="mx-auto" />
          </div>
        </div>
        <div className="table-row odd:bg-brand-blue-light">
          <div className="table-cell p-4 ">
            No synthetic fertilizers or sewage sludge
          </div>
          <div className="table-cell ">
            <AiOutlineCheck color="green" className="mx-auto" />
          </div>
          <div className="table-cell ">
            <AiOutlineClose color="red" className="mx-auto" />
          </div>
        </div>
        <div className="table-row odd:bg-brand-blue-light">
          <div className="table-cell p-4">No toxic, persistent pesticides</div>
          <div className="table-cell ">
            <AiOutlineCheck color="green" className="mx-auto" />
          </div>
          <div className="table-cell ">
            <AiOutlineClose color="red" className="mx-auto" />
          </div>
        </div>
        <div className="table-row odd:bg-brand-blue-light">
          <div className="table-cell p-4">
            No antibiotics or hormones for animals
          </div>
          <div className="table-cell ">
            <AiOutlineCheck color="green" className="mx-auto" />
          </div>
          <div className="table-cell ">
            <AiOutlineClose color="red" className="mx-auto" />
          </div>
        </div>
        <div className="table-row odd:bg-brand-blue-light">
          <div className="table-cell p-4">
            Animals eat 100% organic feed and pasture
          </div>
          <div className="table-cell ">
            <AiOutlineCheck color="green" className="mx-auto" />
          </div>
          <div className="table-cell ">
            <AiOutlineClose color="red" className="mx-auto" />
          </div>
        </div>
        <div className="table-row odd:bg-brand-blue-light">
          <div className="table-cell p-4">
            Protects wildlife and promotes biodiversity
          </div>
          <div className="table-cell ">
            <AiOutlineCheck color="green" className="mx-auto" />
          </div>
          <div className="table-cell ">
            <AiOutlineClose color="red" className="mx-auto" />
          </div>
        </div>
        <div className="table-row odd:bg-brand-blue-light">
          <div className="table-cell p-4">Enhances soil fertility</div>
          <div className="table-cell ">
            <AiOutlineCheck color="green" className="mx-auto" />
          </div>
          <div className="table-cell ">
            <AiOutlineClose color="red" className="mx-auto" />
          </div>
        </div>
        <div className="table-row odd:bg-brand-blue-light">
          <div className="table-cell p-4">Regulated by federal law</div>
          <div className="table-cell ">
            <AiOutlineCheck color="green" className="mx-auto" />
          </div>
          <div className="table-cell ">
            <AiOutlineClose color="red" className="mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}
