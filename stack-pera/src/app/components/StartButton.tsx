"use client";
import Link from "next/link";
import { Outfit } from "next/font/google";
import { useRouter } from "next/navigation";

interface Props {
  players: number;
  buyIn: number;
}

const headingFont = Outfit({
  subsets: ["latin"],
  weight: ["600"],
});

const bodyFont = Outfit({
  subsets: ["latin"],
  weight: ["500"],
});

export default function StartButton({players, buyIn}: Props) {
  const router = useRouter();

  const handleStart = () => {
    router.push(`/session?players=${players}&buyin=${buyIn}`);
  }
  return (
    <div className="mt-3">
      <button onClick={handleStart} className={`${bodyFont.className} bg-green-400 px-6 py-2 rounded-xl text-white border-3 hover:bg-green-500 select-none`} >
        Start Session
      </button>
    </div>
  );
}
