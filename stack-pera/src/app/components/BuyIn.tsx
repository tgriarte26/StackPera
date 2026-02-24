"use client";
import { Outfit } from "next/font/google";
import { Plus, Minus } from "lucide-react";

const headingFont = Outfit({
  subsets: ["latin"],
  weight: ["600"],
});

const bodyFont = Outfit({
  subsets: ["latin"],
  weight: ["500"],
});

interface Props {
  price: number,
  onChange: (price: number) => void
}

export default function BuyIn({ price, onChange }: Props) {
  const MIN = 5;
  const MAX = 20;

  function increment() {
    if (price < MAX) {
      onChange(price + 5);
    }
  }
  function decrement() {
    if (price > MIN) {
      onChange(price - 5);
    }
  }
  return (
    <div className="flex items-center justify-between gap-2">
      <h2
        className={`${bodyFont.className} inline text-xl text-white select-none float-left`}
      >
         Buy In Price:
      </h2>
      <h2
        className={`${bodyFont.className} inline text-2xl text-white select-none float-left`}
      >
        ${price}
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
