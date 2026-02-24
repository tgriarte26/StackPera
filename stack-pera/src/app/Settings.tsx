"use client";
import { Outfit } from "next/font/google";
import { useState } from "react";
import NumOfPlayers from "./components/NumOfPlayers";
import PlayerChips from "./components/PlayerChips";
import BuyIn from "./components/BuyIn";
import StartButton from "./components/StartButton";

const headingFont = Outfit({
  subsets: ["latin"],
  weight: ["600"],
});

const bodyFont = Outfit({
  subsets: ["latin"],
  weight: ["500"],
});

export default function Settings() {
  const [players, setPlayers] = useState(2);
  const [buyIn, setBuyIn] = useState(5);

  return (
    <div className="flex flex-1 flex-col border-3 border-white h-7/8 rounded-2xl items-center m-4 px-4 md:m-10">
      <h1
        className={`${headingFont.className} flex text-white mt-4 text-4xl select-none`}
      >
        New Session
      </h1>
      <div className="bg-gray-700 text-center p-5 m-2 rounded-2xl border-white border-2 select-none w-full md:w-1/2">
        <NumOfPlayers value={players} onChange={setPlayers} />
      </div>
      <div className="bg-gray-700 text-center p-5 m-2 rounded-2xl border-white border-2 select-none w-full md:w-1/2">
        <BuyIn price={buyIn} onChange={setBuyIn}/>
      </div>
      <div>
        <StartButton players={players} buyIn={buyIn}/>
      </div>
      <div className="mb-5" />

    </div>
  );
}
