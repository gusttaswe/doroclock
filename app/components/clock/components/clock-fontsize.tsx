
import { ClockFontSizeProps } from './clock-fontsize.types'

export function ClockFontSize({
  fontSize,
  updateFontSize
}: ClockFontSizeProps) {

  const handleFontSizeChange = (fontSize: number) => {
    if (fontSize < 1) return;
    updateFontSize(fontSize);
  };

  return (
    <div className="flex gap-2" data-testid='clock-fontsize'>
      <button 
        className="w-10 font-bold rounded-md" 
        onClick={() => handleFontSizeChange(fontSize - 1)}
      > - </button>
      <input 
        data-testid='clock-fontsize-input'
        className="w-10 border border-slate-500 rounded-md text-center"
        type="text" 
        value={fontSize}
        min={1}
        onChange={(e) => handleFontSizeChange(Number(e.target.value))} 
      />
      <button 
        className="w-10 font-bold rounded-md"
        onClick={() => handleFontSizeChange(fontSize + 1)}
      >+</button>
    </div>
  )
}