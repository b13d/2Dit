"use client";

import React, { useState } from "react";
import TableSales from "../components/TableSales";
import Plan from "../components/Plan";

export function Task5() {
  const [plan, setPlan] = useState(false);

  const handleChangePlan = () => {
    setPlan((value) => !value);
  };

  return (
    <section className="py-10">
      <div className="flex gap-2">
        <span className="text-[#626262]">Предыдущий период</span>
        <div
          onClick={() => handleChangePlan()}
          className={`${
            plan ? "justify-end" : "justify-start"
          } cursor-pointer w-10 h-6 rounded-full flex items-center px-1 bg-[#E83D46]`}
        >
          <span className="block bg-[#F9A620] rounded-full w-4 h-4"></span>
        </div>
        <span className="text-[#A7A7A7]">План</span>
      </div>

      {!plan ? <TableSales /> : <Plan />}
    </section>
  );
}
