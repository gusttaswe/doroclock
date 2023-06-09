import { LucideItalic } from "lucide-react";

type ClockItalic = {
  isItalic: boolean;
  setItalic(): void;
}

export function ClockItalic({
  isItalic,
  setItalic
}: ClockItalic) {

  return (
    <button 
      data-testid='clock-italic'
      className={`border border-slate-500 rounded-md p-1 ${isItalic && 'bg-slate-400'}`}
      onClick={setItalic}
    >
      <LucideItalic size={20} />
    </button>
  )
}