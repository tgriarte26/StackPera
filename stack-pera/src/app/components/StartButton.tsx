"use client";
import Link from "next/link";
import { Outfit } from "next/font/google";

const headingFont = Outfit({
  subsets: ["latin"],
  weight: ["600"],
});

const bodyFont = Outfit({
  subsets: ["latin"],
  weight: ["500"],
});

export default function StartButton() {
  return (
    <div className="mt-3">
      <Link href="/session" className={`${bodyFont.className} bg-green-400 px-6 py-2 rounded-xl text-white border-3 hover:bg-green-500 select-none`} >
        Start Session
      </Link>
    </div>
  );
}
