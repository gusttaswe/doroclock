import { ChangeEvent, useState } from "react";
import { createPortal } from "react-dom";
import { FooterModal } from "@/components/modal";
import { Settings } from 'lucide-react';
import { TwitterPicker } from 'react-color';
import useClock from "./Clock.hook";


export const Clock = () => {
  const { 
    clockSettings, 
    isSettingsVisible, 
    showSettings, 
    hideSettings, 
    updateClockSettings 
  } = useClock();

  const handleFontSizeChange = (fontSize: number) => {
    if (fontSize < 1) return;
    updateClockSettings({ fontSize });
  };

  
  return (
    <>
      <div className="grid items-baseline">
        <button 
          className="justify-self-end relative left-9 top-4"
          onClick={showSettings}  
          data-testid="clock-settings-button"
        >
          <Settings size={clockSettings.fontSize * 10} color={clockSettings.color} />
        </button>
        <span 
          className="font-bold text-6xl lg:text-9xl"
          style={{
            ...clockSettings,
            fontSize: `${clockSettings.fontSize}em`
          }}
          data-testid="clock-timer"
        >
          00:00:00
        </span>
      </div>

      
      { true && createPortal(
        <FooterModal
          onClose={hideSettings}
        >
          <div 
            className="w-full grid grid-rows-2 gap-6"  
            data-testid="clock-settings-modal"
          >
            <div className="">
              <span className="font-semibold">Color:</span>
              <TwitterPicker
                className="mt-4"
                triangle="hide"
                color={clockSettings.color}
                onChangeComplete={({ hex }) => updateClockSettings({ color: hex })}
              />
            </div>
            <div className="">
              <span className="font-semibold">Font Size:</span>
              <div className="flex gap-2 mt-4">
                <button 
                  className="w-10 font-bold rounded-md" 
                  onClick={() => handleFontSizeChange(clockSettings.fontSize - 1)}
                > - </button>
                <input 
                  className="w-10 border border-slate-400 rounded-md text-center"
                  type="text" 
                  value={clockSettings.fontSize}
                  min={1}
                  onChange={(e) => handleFontSizeChange(Number(e.target.value))} 
                />
                <button 
                  className="w-10 font-bold rounded-md"
                  onClick={() => handleFontSizeChange(clockSettings.fontSize + 1)}
                >+</button>
              </div>
            </div>
          </div>
        </FooterModal>,
        document.body
      )}
    </>
  )
}