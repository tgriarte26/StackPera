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
  const [playerCount, setPlayerCount] = useState(6);
  const [players, setPlayers] = useState<{ id: number; chips: number }[]>([]);
  const createPlayers = (count: number) => {
    const newPlayers = Array.from({ length: count }, (_, index) => ({
      id: index + 1,
      chips: 1000,
    }));

    setPlayers(newPlayers);
  };
  return (
    <div className="flex flex-col border-3 border-white w-1/2 h-7/8 rounded-2xl items-center">
      <h1
        className={`${headingFont.className} flex text-white mt-4 text-4xl select-none`}
      >
        New Session
      </h1>
      <div className="bg-gray-700 text-center p-5 mt-5 rounded-2xl border-white border-2 select-none">
        <h2
          className={`${bodyFont.className} flex text-xl text-white select-none`}
        >
          Number of Players:
        </h2>
        <SliderPlayers
          onChange={(count) => {
            setPlayerCount(count);
            createPlayers(count);
          }}
        />
        <div className="mt-6">
          {players.map((player) => (
            <div
              key={player.id}
              className="flex justify-between text-white"
            >
              <span>Player {player.id}</span>
              <span>{player.chips} chips</span>    
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
