"use client";
import { Outfit } from "next/font/google";
import SliderPlayers from "./components/SliderPlayers";
import { useState } from "react";

const headingFont = Outfit({
  subsets: ["latin"],
  weight: ["600"],
});

const bodyFont = Outfit({
  subsets: ["latin"],
  weight: ["500"],
});

export default function Settings() {
  const [count, setCount] = useState(6);

  return (
    <div className="flex flex-1 flex-col border-3 border-white h-7/8 rounded-2xl items-center m-10">
      <h1
        className={`${headingFont.className} flex text-white mt-4 text-4xl select-none`}
      >
        New Session
      </h1>
      <div className="bg-gray-700 text-center p-5 mt-5 rounded-2xl border-white border-2 select-none w-1/2">
        <SliderPlayers onChange={setCount}/>
      </div>
      <div className="bg-gray-700 text-center p-5 mt-5 rounded-2xl border-white border-2 select-none w-1/2">
        
      </div>
      <div className="mb-5"/>
    </div>
  );
}
