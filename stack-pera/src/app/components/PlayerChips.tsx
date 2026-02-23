"use client";
import { Outfit } from "next/font/google";
import { useState } from "react";

const headingFont = Outfit({
  subsets: ["latin"],
  weight: ["600"],
});

const bodyFont = Outfit({
  subsets: ["latin"],
  weight: ["500"],
});

interface Player {
  id: number;
  chips: Record<string, number>;
}

interface PlayerChipsProps {
  playerCount: number;
}

const fixedStack = {
  white: 14, //$0.05
  red: 8,    //$0.10
  green: 6,  //$0.25
  blue: 2,   //$0.50
  black: 1,  //$1.00
}

export default function PlayerChips({playerCount} : PlayerChipsProps) {
  const players: Player[] = Array.from({length: playerCount}, (_,i) => ({
    id: i + 1,
    chips: {...fixedStack},
  }))

  return (
    <div className="flex flex-col gap-4 items-center">
        {players.map((player) => (
          <div key={player.id} className="flex gap-2 items-center">
            <span className="text-white font-semibold">Player {player.id}:</span>
            {Object.entries(player.chips).map(([color, amount]) => (
              <span
                key={color} 
                className="px-2 py-1 rounded-full text-white">
                  {color}: {amount}
              </span>
            ))}
          </div>
        ))}
    </div>
  )
}