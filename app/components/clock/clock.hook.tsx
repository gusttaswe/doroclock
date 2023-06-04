import { StaticImageData } from "next/image";
import { useState } from "react";
import giffTest from '@/public/2.gif'

type Clock = {
  color: string;
  fontSize: number;
  isBold: boolean;
  isItalic: boolean;
  background: string | StaticImageData
}

const useClock = () => {
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);
  const [clockSettings, setClockSettings] = useState<Clock>(initialClockSettings);

  const showSettings = () => setIsSettingsVisible(true);

  const hideSettings = () => setIsSettingsVisible(false);
  
  const updateClockSettings = (updatedSettings: Partial<Clock>) => {
    setClockSettings(prevSettings => ({ ...prevSettings, ...updatedSettings }));
  }

  return {
    clockSettings,
    isSettingsVisible,
    showSettings,
    hideSettings,
    updateClockSettings
  };
}

const initialClockSettings: Clock = {
  color: '#fff',
  fontSize: 4,
  isBold: false,
  isItalic: false,
  background: giffTest
}

export const clockFonts = ['']

export default useClock;