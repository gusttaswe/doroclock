import { useState } from "react";
import { createPortal } from "react-dom";
import { FooterModal } from "@/components/modal";
import { Settings, Twitter } from 'lucide-react';
import { TwitterPicker } from 'react-color';

type Clock = {
  color: string;
  fontSize: number;
}

const initialClockSettings: Clock = {
  color: '#fff',
  fontSize: 42,
}

export const Clock = () => {
  const [isConfigOpen, setIsConfigOpen] = useState<boolean>(false);
  const [settings, setSettings] = useState<Clock>(initialClockSettings);
  
  return (
    <>
      <div className="grid items-baseline">
        <button 
          className="justify-self-end relative left-9 top-4"
          onClick={() => setIsConfigOpen(prev => !prev)}  
          data-testid="clock-settings-button"
        >
          <Settings size={44} color={settings.color} />
        </button>
        <span 
          className="font-bold text-6xl lg:text-9xl"
          style={settings}
          data-testid="clock-timer"
        >
          00:00:00
        </span>
      </div>

      
      { isConfigOpen && createPortal(
        <FooterModal
          onClose={() => setIsConfigOpen(false)}
        >
          <div 
            className="w-full grid grid-cols-3"  
            data-testid="clock-settings-modal"
          >
            <div className="col-span-2">
              <span>Color:</span>
              <TwitterPicker
                triangle="hide"
                color={settings.color}
                onChangeComplete={({ hex }) => setSettings(prev => ({...prev, color: hex}))}
              />
            </div>
            <div className="">
              <span>Font Size:</span>
              <br />
              <input 
                className="w-10"
                type="number" 
                value={settings.fontSize}
                onChange={(e) => setSettings(prev => ({...prev, fontSize: Number(e.target.value) }))} 
              />px
            </div>
          </div>
        </FooterModal>,
        document.body
      )}
    </>
  )
}