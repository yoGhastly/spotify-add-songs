import React from "react";
import { cn } from "../utils/tailwind";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export const Input: React.FC<Props> = ({ value, onChange }) => {
  return (
    <form className="flex flex-col justify-center relative max-w-5xl mx-auto mb-5">
      <div className="flex flex-row items-center justify-center">
        <input className={cn(
          "input input-bordered",
          "py-3 px-4",
          "mr-2 bg-[#1e1e1e] text-[#979797]",
          "w-full max-w-xs"
        )} type="text" placeholder="Type the url..." value={value} onChange={(e) => onChange(e.target.value)} />
        <button className={cn(
          "w-32 h-12",
          "text-md text-white uppercase font-semibold",
          "bg-emerald-600 hover:bg-emerald-500",
          "transition-colors duration-200",
          "rounded-lg"
        )} type="submit">Add</button>
      </div>
    </form>
  );
};

