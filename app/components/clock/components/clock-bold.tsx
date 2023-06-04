import { LucideBold } from "lucide-react";

type ClockBold = {
  isBold: boolean;
  setBold(): void;
}

export function ClockBold({
  isBold,
  setBold
}: ClockBold) {

  return (
    <button 
      data-testid="clock-bold"
      className={`border border-slate-500 rounded-md p-1 ${isBold && 'bg-slate-400'}`}
      onClick={setBold}
    >
      <LucideBold size={20} />
    </button>
  )
}