import React from "react";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

export default function ComparisonTable() {
  return (
    <div className="table w-full">
      <div className="table-header-group">
        <div className="table-row">
          <div className="table-cell ">What do these labels really mean?</div>
          <div className="table-cell text-center">Organic</div>
          <div className="table-cell text-center">Non-GMO</div>
        </div>
      </div>
      <div className="table-row-group">
        <div className="table-row">
          <div className="table-cell ">GMO use prohibited</div>
          <div className="table-cell ">
            <AiOutlineCheck color="green" className="mx-auto" />
          </div>
          <div className="table-cell ">
            <AiOutlineCheck color="green" className="mx-auto" />
          </div>
        </div>
        <div className="table-row">
          <div className="table-cell ">
            No artificial colors, flavors, or preservatives
          </div>
          <div className="table-cell ">
            <AiOutlineCheck color="green" className="mx-auto" />
          </div>
          <div className="table-cell ">
            <AiOutlineClose color="red" className="mx-auto" />
          </div>
        </div>
        <div className="table-row">
          <div className="table-cell ">
            No synthetic fertilizers or sewage sludge
          </div>
          <div className="table-cell ">
            <AiOutlineCheck color="green" className="mx-auto" />
          </div>
          <div className="table-cell ">
            <AiOutlineClose color="red" className="mx-auto" />
          </div>
        </div>
        <div className="table-row">
          <div className="table-cell ">No toxic, persistent pesticides</div>
          <div className="table-cell ">
            <AiOutlineCheck color="green" className="mx-auto" />
          </div>
          <div className="table-cell ">
            <AiOutlineClose color="red" className="mx-auto" />
          </div>
        </div>
        <div className="table-row">
          <div className="table-cell ">
            No antibiotics or hormones for animals
          </div>
          <div className="table-cell ">
            <AiOutlineCheck color="green" className="mx-auto" />
          </div>
          <div className="table-cell ">
            <AiOutlineClose color="red" className="mx-auto" />
          </div>
        </div>
        <div className="table-row">
          <div className="table-cell ">
            Animals eat 100% organic feed and pasture
          </div>
          <div className="table-cell ">
            <AiOutlineCheck color="green" className="mx-auto" />
          </div>
          <div className="table-cell ">
            <AiOutlineClose color="red" className="mx-auto" />
          </div>
        </div>
        <div className="table-row">
          <div className="table-cell ">
            Protects wildlife and promotes biodiversity
          </div>
          <div className="table-cell ">
            <AiOutlineCheck color="green" className="mx-auto" />
          </div>
          <div className="table-cell ">
            <AiOutlineClose color="red" className="mx-auto" />
          </div>
        </div>
        <div className="table-row">
          <div className="table-cell ">Enhances soil fertility</div>
          <div className="table-cell ">
            <AiOutlineCheck color="green" className="mx-auto" />
          </div>
          <div className="table-cell ">
            <AiOutlineClose color="red" className="mx-auto" />
          </div>
        </div>
        <div className="table-row">
          <div className="table-cell ">Regulated by federal law</div>
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
