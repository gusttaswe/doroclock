'use client';

import { createPortal } from "react-dom";
import { FooterModal } from "@/app/components/modal";
import { Settings } from 'lucide-react';
import useClock from "./clock.hook";
import { ClockAlignment, ClockBold, ClockColorPicker, ClockFontSize, ClockItalic } from "./components";
import { ClockBackground } from "./components/clock-background";
import { useContext } from "react";
import { ThemeContext, ThemeDispatchContext } from "../providers/theme";
import { ClockFonts } from "./components/clock-fonts";

export const Clock = () => {
  const { 
    clockSettings, 
    isSettingsVisible, 
    showSettings, 
    hideSettings, 
    updateClockSettings,
    textColorOptions
  } = useClock();
  
  const themeActions = useContext(ThemeDispatchContext)
  const theme = useContext(ThemeContext)

  return (
    <div className="flex flex-col container h-full w-full">

      { isSettingsVisible && (
        <div className="flex justify-center gap-5 p-5 z-10">
          <ClockBold 
            isBold={clockSettings.isBold}
            setBold={() => updateClockSettings({ isBold: !clockSettings.isBold })}
          />
          <ClockItalic 
            isItalic={clockSettings.isItalic}
            setItalic={() => updateClockSettings({ isItalic: !clockSettings.isItalic })}
          />
          <ClockAlignment 
            currentAlignment={clockSettings.horizontalAlignment}
            changeAlignment={(alignment) => updateClockSettings({ horizontalAlignment: alignment })} 
            algnmentType={"horizontal"}
          />
          <ClockAlignment 
            currentAlignment={clockSettings.verticalAlignment}
            changeAlignment={(alignment) => updateClockSettings({ verticalAlignment: alignment })} 
            algnmentType={"vertical"}
          />
          <ClockBackground 
            updateBackground={(background) => themeActions?.changeBackground(background)}
          />
        </div>
      )}
      
      <div 
        className={`flex-1 flex items-center ${isSettingsVisible ? 'p-8' : 'p-14'}`}
        style={{
          alignItems: clockSettings.verticalAlignment,
          justifyContent: clockSettings.horizontalAlignment
        }}
      >
        <div className="relative">
          <span 
            className={`text-6xl lg:text-9xl ${clockSettings.fontFamily}`}
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
          <button 
            className="absolute bottom-11"
            onClick={isSettingsVisible ? hideSettings : showSettings}  
            data-testid="clock-settings-button"
            >
            <Settings size={clockSettings.fontSize * 10} color={clockSettings.color} />
          </button>
        </div>
      </div>

      { isSettingsVisible && (
        <div className="flex flex-col flex-shrink-0 z-10">
          <ClockColorPicker 
            currentColor={clockSettings.color}
            updateColor={(color) => updateClockSettings({ color: color })}
            customColors={textColorOptions}
            currentImage={theme.background}
          />
          <br/>
          <br/>
          <ClockFonts
            currentFont={clockSettings.fontFamily || ""}
            updateFont={(font) => updateClockSettings({ fontFamily: font })}
          />
        </div>
      )}
    </div>
  )
}