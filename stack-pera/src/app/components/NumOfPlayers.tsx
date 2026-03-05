"use client";
import { Outfit } from "next/font/google";
import { Plus, Minus } from "lucide-react";
import { useState, useEffect } from "react";

const headingFont = Outfit({
  subsets: ["latin"],
  weight: ["600"],
});

const bodyFont = Outfit({
  subsets: ["latin"],
  weight: ["500"],
});

interface Props {
  value: number;
  onChange: (value: number) => void;
}

export default function NumOfPlayers({ value, onChange }: Props) {

  const MIN = 2;
  const MAX = 10;

  function increment() {
    if (value < MAX) {
      onChange(value + 1);
    }
  }
  function decrement() {
    if (value > MIN) {
      onChange(value - 1);
    }
  }
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between gap-2">
        <h2
          className={`${bodyFont.className} inline text-xl text-white select-none float-left`}
        >
          # of Players:
        </h2>
        <h2
          className={`${bodyFont.className} inline text-2xl text-white select-none float-left`}
        >
          {value}
        </h2>
        <div className="flex items-center gap-2">
          <button
            onClick={increment}
            className="bg-[#00A86B] border-3 border-white px-1 py-1 rounded-xl hover:opacity-90"
          >
            <Plus className="text-white" />
          </button>
          <button
            onClick={decrement}
            className="bg-[#c1121f] border-3 border-white px-1 py-1 rounded-xl hover:opacity-90"
          >
            <Minus className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
