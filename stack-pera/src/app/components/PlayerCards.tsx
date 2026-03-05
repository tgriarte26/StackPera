"use client";
import { Outfit } from "next/font/google";
import { useState, useEffect } from "react";
import { Plus, Minus, Crown, Edit2, Check } from "lucide-react";

interface Player {
  id: number;
  name: string;
  chips: {
    white: number;
    red: number;
    green: number;
    blue: number;
    black: number;
  };
}

interface Props {
  players: number;
  buyIn: number;
}

const chipValues = {
  white: 0.05,
  red: 0.1,
  green: 0.25,
  blue: 0.5,
  black: 1.0,
};

const bodyFont = Outfit({
  subsets: ["latin"],
  weight: ["500"],
});

export default function PlayerCards({ players, buyIn }: Props) {
  const [playerList, setPlayerList] = useState<Player[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);

  useEffect(() => {
    const multiplier = buyIn / 5;
    const newPlayers = Array.from({ length: players }, (_, i) => ({
      id: i + 1,
      name: "Player " + (i + 1),
      chips: {
        white: 14 * multiplier,
        red: 8 * multiplier,
        green: 6 * multiplier,
        blue: 2 * multiplier,
        black: 1 * multiplier,
      },
    }));
    setPlayerList(newPlayers);
  }, [players, buyIn]);

  const updateChips = (
    playerId: number,
    color: keyof Player["chips"],
    amount: number,
  ) => {
    setPlayerList((prev) =>
      prev.map((p) =>
        p.id === playerId
          ? {
              ...p,
              chips: {
                ...p.chips,
                [color]: Math.max(0, p.chips[color] + amount),
              },
            }
          : p,
      ),
    );
  };

  const calculateMoney = (chips: Player["chips"]) => {
    return Object.entries(chips).reduce(
      (total, [color, count]) =>
        total + count * chipValues[color as keyof typeof chipValues],
      0,
    );
  };

  const calculateTotalPot = () => {
    return playerList.reduce(
      (total, player) => total + calculateMoney(player.chips),
      0,
    );
  };

  const calculatePercentage = (chips: Player["chips"]) => {
    const playerMoney = calculateMoney(chips);
    const totalPot = calculateTotalPot();

    if (totalPot === 0) {
      return 0;
    }

    return ((playerMoney / totalPot) * 100).toFixed(2);
  };

  const getChipLeaderId = () => {
    if (playerList.length === 0) return null;

    return playerList.reduce((leader, player) => {
      const leaderMoney = calculateMoney(leader.chips);
      const playerMoney = calculateMoney(player.chips);

      return playerMoney > leaderMoney ? player : leader;
    }).id;
  };

  const chipLeaderId = getChipLeaderId();

  return (
    <div className="bg-[#1a1a1a] m-5 rounded w-full justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {playerList.map((player) => (
          <div
            key={player.id}
            className={`border-3 border-white rounded-2xl m-2 ${chipLeaderId === player.id ? "border-yellow-400 bg-yellow-400/8" : "border-white"}`}
          >
            <div className="flex mt-3 mb-3 justify-center items-center">
              {editingId === player.id ? (
                <input
                  autoFocus
                  type="text"
                  value={player.name}
                  onChange={(e) =>
                    setPlayerList((prev) =>
                      prev.map((p) =>
                        p.id === player.id ? { ...p, name: e.target.value } : p,
                      ),
                    )
                  }
                  onBlur={() => setEditingId(null)}
                  onKeyDown={(e) => e.key === "Enter" && setEditingId(null)}
                  className={`justify-center items-center text-center text-2xl font-[inherit] rounded-lg border border-white bg-[#1a1a1a] text-white focus:outline-none <py-0 className="5"></py-0> mr-2 ${bodyFont.className}`}
                  style={{ lineHeight: '2rem'}}
                />
              ) : (
                <span
                  className={`text-2xl px-3 py-1 rounded-lg text-white focus:outline-none ${bodyFont.className}`}
                  onClick={() => setEditingId(player.id)}
                  style={{ lineHeight: '2rem'}}
                >
                  {player.name}
                </span>
              )}
              {chipLeaderId === player.id && (
                <Crown className="flex text-yellow-400 select-none" />
              )}
            </div>
            <div className="border-b border-white"></div>
            {Object.entries(player.chips).map(([color, count]) => (
              <div
                key={color}
                className={`flex items-center justify-between px-5 py-2 text-white text-lg border-b border-white/10 ${bodyFont.className}`}
              >
                <span className="capitalize w-24">{color}:</span>

                <span className="w-12 text-center">{count}</span>

                <div className="flex gap-2">
                  <button
                    onClick={() =>
                      updateChips(player.id, color as keyof Player["chips"], +1)
                    }
                    className="bg-[#00a86b] border-2 border-white rounded-xl p-1 ml-1 mr-1"
                  >
                    <Plus />
                  </button>
                  <button
                    onClick={() =>
                      updateChips(player.id, color as keyof Player["chips"], -1)
                    }
                    className="bg-[#c1121f] border-2 border-white rounded-xl p-1 ml-1 mr-1"
                  >
                    <Minus />
                  </button>
                </div>
              </div>
            ))}
            <div
              className={`flex items-center justify-between px-5 py-3 text-white text-xl border-b border-white/10 ${bodyFont.className}`}
            >
              <span>Total Money:</span>
              <span>${calculateMoney(player.chips).toFixed(2)}</span>
            </div>
            <div
              className={`flex items-center justify-between px-5 py-3 mb-1 text-white text-xl ${bodyFont.className}`}
            >
              <span>% of Pot:</span>
              <span>{calculatePercentage(player.chips)}%</span>
            </div>
          </div>
        ))}
      </div>
      <div
        className={`bg-[#0b3d2e] text-white text-3xl rounded-xl py-5 text-center mt-2 ${bodyFont.className}`}
      >
        Pot: ${calculateTotalPot().toFixed(2)}
      </div>
    </div>
  );
}
