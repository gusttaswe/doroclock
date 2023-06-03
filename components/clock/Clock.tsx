import { useState } from "react";
import { createPortal } from "react-dom";
import { FooterModal } from "@/components/modal";
import { Settings } from 'lucide-react';


type ClockProps = {

};

export const Clock = ({

}: ClockProps) => {
  const [isConfigOpen, setIsConfigOpen] = useState<boolean>(false);
  
  return (
    <>
      <div className="grid items-baseline">
        <button 
          className="justify-self-end relative left-9 top-4"
          onClick={() => setIsConfigOpen(prev => !prev)}  
          data-testid="clock-settings-button"
        >
          <Settings size={44}/>
        </button>
        <span 
          className="font-bold text-6xl lg:text-9xl"
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
            data-testid="clock-settings-modal"
          ></div>
        </FooterModal>,
        document.body
      )}
    </>
  )
}