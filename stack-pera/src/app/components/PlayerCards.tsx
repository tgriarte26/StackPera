"use client";
import { Outfit } from 'next/font/google';
import { useState, useEffect } from "react";

interface Player {
  id: number;
  chips: {white: number; red: number; green: number; blue: number; black: number};
}

interface Props {
  players: number;
  buyIn: number;
}

const bodyFont = Outfit({
  subsets: ["latin"],
  weight: ["500"],
});

export default function PlayerCards({players, buyIn}: Props) {
  const [playerList, setPlayerList] = useState<Player[]>([]);

  useEffect(() => {
    const multiplier = buyIn / 5;
    const newPlayers = Array.from({ length: players}, (_,i) => ({
      id: i + 1,
      chips: { white: 14 * multiplier, red: 8 * multiplier, green: 6 * multiplier, blue: 2 * multiplier, black: 1 * multiplier}
    }))
    setPlayerList(newPlayers);
  }, [players, buyIn])

  const updateChips = (playerId: number, color: keyof Player["chips"], amount: number) => {
    setPlayerList(prev =>
      prev.map(p =>
        p.id === playerId ? {...p, chips: { ...p.chips, [color]: Math.max(0, p.chips[color] + amount)}} : p
      )
    )
  }

  return (
    <div className="flex bg-gray-400 m-5 rounded w-1/2 justify-center items-center">
      <div>
        {playerList.map(player => (
          <div key={player.id} style={{ border: "1px solid gray", padding: 5, margin: 5}}>
            <h3>Player {player.id}</h3>
            {Object.entries(player.chips).map(([color, count]) => (
              <div key={color}>
                {color}: {count}
                <button onClick={() => updateChips(player.id, color as keyof Player["chips"], +1)}>+</button>
                <button onClick={() => updateChips(player.id, color as keyof Player["chips"], -1)}>-</button>
              </div>
            ))}
          </div>
        ))}
      </div>

    </div>
  )
}