"use client";

import React, { useState } from "react";

const colors = [
  "#e83c46",
  "#f9a620",
  "#005fa7",
  "#808080",
  "#6d5dff",
  "#00b496",
  "#ff7272",
];

export default function Card({ options }) {
  const [selectParametr, setSelectParametr] = useState(undefined);

  console.log(options);

  let count = options.values.reduce((num, currentNum) => num + currentNum, 0);
  let lastNum = 0;

  console.log(count);

  const handleClickParametr = (indexParam) => {
    if (selectParametr === indexParam) {
      setSelectParametr(undefined);
    } else {
      setSelectParametr(indexParam);
    }
  };

  return (
    <section className="p-4 max-w-[300px] shadow-xl">
      <p>{options.nameCard}</p>

      <div className="canvas flex flex-col">
        <svg className="chart" width={300} height={300} viewBox="0 0 50 50">
          {options.countriesOrCities.map((value, index) => {
            console.log(options.values[index] / (count / 100));

            if (index !== 0) {
              lastNum += options.values[index - 1] / (count / 100);
            }

            console.log(index);
            console.log(selectParametr);
            return (
              <circle
                onClick={() => handleClickParametr(index)}
                key={value}
                style={{ strokeWidth: index === selectParametr ? 5 : 4 }}
                className={`unit cursor-pointer hover:stroke-[5] duration-200`}
                strokeDasharray={[options.values[index] / (count / 100), 100]}
                strokeDashoffset={index > 0 ? -lastNum : 0}
                r="15.9"
                cx="50%"
                cy="50%"
              ></circle>
            );
          })}

          <text x={20} y={27} className="text-[6px] font-bold text-[black]">
            {selectParametr === undefined
              ? options.unit === "шт."
                ? count
                : count.toString().slice(0, 3)
              : options.unit === "шт."
              ? options.values[selectParametr]
              : options.values[selectParametr].toString().length === 8
              ? options.values[selectParametr].toString().slice(0, 2)
              : options.values[selectParametr].toString().slice(0, 3)}
          </text>
          <text x={21} y={31} className="text-[4px] text-[black]">
            {options.unit}
          </text>
        </svg>
        <div class="legend">
          <ul class="caption-list">
            {options.countriesOrCities.map((value, index) => {
              return (
                <li
                  key={value}
                  className={`flex gap-2 text-[12px] ${
                    index === selectParametr || selectParametr === undefined
                      ? "opacity-100"
                      : "opacity-50"
                  }`}
                >
                  <span
                    style={{ backgroundColor: `${colors[index]}` }}
                    className={`inline-block w-5 h-5 rounded-full`}
                  ></span>
                  - {value}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
