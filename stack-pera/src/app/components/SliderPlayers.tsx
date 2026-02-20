'use client';
import React, { useState } from 'react';

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
    <div className="gap-3 flex flex-col">
      <h2 className="text-center text-white text-2xl mt-2">{value}</h2>
      <input
        type="range"
        min={MIN}
        max={MAX}
        value={value}
        step={1}
        onChange={changeWidth}
        className="player-slider cursor-pointer"
        />
    </div>
  )
}

export default SliderPlayers;