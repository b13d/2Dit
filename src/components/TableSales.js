import React from "react";
import Card from "./Card";
import apiCards from "../api/apiCards.json";

export default function TableSales() {
  let option = {
    countries: ["Россия", "Узбекистан", "Казахстан"],
    values: [335, 500, 1000],
    unit: "шт.",
  };

  console.log(apiCards);

  return (
    <section>
      <h1 className="text-[#262424] text-[32px] font-semibold">Продажи</h1>

      <div className="max-[800px]:hidden flex mb-10 justify-center items-center ">
        <span className="w-[25%]">Количество проданных пицц</span>
        <div className="w-full flex items-center justify-center">
          <div className="w-[50%] h-[1px] border "></div>
          <span className="px-10 ">Выручка</span>
          <div className="w-[50%] h-[1px] border"></div>
        </div>
      </div>

      <main className="flex justify-between max-[900px]:justify-center gap-5 flex-wrap">
        {apiCards.map((value, index) => {
          return <Card key={index} options={value} />;
        })}
      </main>
    </section>
  );
}
