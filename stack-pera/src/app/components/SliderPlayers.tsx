'use client';
import React, { useState } from 'react';
import { Outfit } from "next/font/google";

const headingFont = Outfit({
  subsets: ["latin"],
  weight: ["600"],
});

const bodyFont = Outfit({
  subsets: ["latin"],
  weight: ["500"],
});

const MIN = 2;
const MAX = 10;

interface SliderProps {
  onChange: (value: number) => void;
}

const SliderPlayers = ({onChange} : SliderProps) => {
  const [value, setValue] = useState(6);

  const changeWidth = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    setValue(newValue);
    onChange(newValue);
  }

  return (
    <div className="items-center">
      <div>
        <h2 className={`${bodyFont.className} inline text-xl text-white select-none float-left`}>Number of Players:</h2>
        <h2 className={`${bodyFont.className} inline text-xl text-white select-none`}>{value}</h2>
          <input
            type="range"
            min={MIN}
            max={MAX}
            value={value}
            onChange={changeWidth}
            className={`${bodyFont.className} inline mt-2.5 float-right player-slider`}
          />
      </div>
    </div>
  )
}

export default SliderPlayers;