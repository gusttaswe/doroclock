'use client';

import { createPortal } from "react-dom";
import { FooterModal } from "@/app/components/modal";
import { Settings } from 'lucide-react';
import useClock from "./clock.hook";
import { ClockBold, ClockColorPicker, ClockFontSize, ClockItalic } from "./components";
import { ClockBackground } from "./components/clock-background";
import Image from 'next/image';
import { Suspense } from "react";

export const Clock = () => {
  const { 
    clockSettings, 
    isSettingsVisible, 
    showSettings, 
    hideSettings, 
    updateClockSettings 
  } = useClock();
  
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
          className="text-6xl lg:text-9xl"
          style={{
            color: clockSettings.color,
            fontSize: `${clockSettings.fontSize}em`,
            fontWeight: clockSettings.isBold ? 'bold' : 'lighter',
            fontStyle: clockSettings.isItalic ? 'italic' : 'unset',
          }}
          data-testid="clock-timer"
        >
          00:00:00
        </span>
      </div>
     
      { clockSettings.background && createPortal(
        <Image
          src={clockSettings.background} 
          alt="my gif" 
          height={500}
          width={500}
          className='w-screen h-screen absolute top-0 left-0 z-0 object-cover'
          data-testid='background-image'
        />,
        document.body
      )}

      { true && createPortal(
        <FooterModal
          onClose={hideSettings}
          title="Clock Customizations"
        >
          <div 
            className="w-full grid items-center grid-rows-3"  
            data-testid="clock-settings-modal"
          >
            <div>
              <span className="font-semibold">Color:</span>
              <div className="mt-4">
                <ClockColorPicker 
                  currentColor={clockSettings.color} 
                  updateColor={(color) => updateClockSettings({ color })}
                />
              </div>
            </div>
            <div id="font-settings">
              <span className="font-semibold">Font Settings:</span>
              <div className="flex items-center gap-4 mt-4">
                <ClockFontSize 
                  fontSize={clockSettings.fontSize}
                  updateFontSize={(fontSize) => updateClockSettings({ fontSize })}
                />
                <ClockBold 
                  isBold={clockSettings.isBold}
                  setBold={() => updateClockSettings({ isBold: !clockSettings.isBold })}
                />
                <ClockItalic 
                  isItalic={clockSettings.isItalic}
                  setItalic={() => updateClockSettings({ isItalic: !clockSettings.isItalic })}
                />
              </div>
            </div>
            <div>
              <span className="font-semibold">Background</span>
              <div className="mt-4">
                <ClockBackground 
                  background={clockSettings.background}
                  updateBackground={(background) => updateClockSettings({ background })}
                />
              </div>
            </div>
          </div>
        </FooterModal>,
        document.body
      )}
    </>
  )
}