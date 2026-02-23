"use client";
import { Outfit } from "next/font/google";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const headingFont = Outfit({
  subsets: ["latin"],
  weight: ["600"],
});

const bodyFont = Outfit({
  subsets: ["latin"],
  weight: ["500"],
});

export default function NumOfPlayers() {
  const MIN = 2;
  const MAX = 10;
  const [count, setCount] = useState(MIN);

  function increment() {
    if (count < MAX) {
      setCount(count + 1);
    }
  }
  function decrement() {
    if (count > MIN) {
      setCount(count - 1);
    }
  }
  return (
    <div className="flex items-center justify-between gap-2">
      <h2
        className={`${bodyFont.className} inline text-xl text-white select-none float-left`}
      >
        # of Players:
      </h2>
      <h2
        className={`${bodyFont.className} inline text-2xl text-white select-none float-left`}
      >
        {count}
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
  );
}
