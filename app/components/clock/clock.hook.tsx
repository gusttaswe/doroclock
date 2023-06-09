import { useCallback, useState } from "react";
import { Alignment } from "./components/clock-alignment";

type Clock = {
  color: string;
  fontSize: number;
  isBold: boolean;
  isItalic: boolean;
  verticalAlignment: Alignment;
  horizontalAlignment: Alignment;
  fontFamily?: string;
}

const useClock = () => {
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);
  const [clockSettings, setClockSettings] = useState<Clock>(initialClockSettings);
  const textColorOptions = [
    '#D9E3F0',
    '#F47373',
    '#697689',
    '#37D67A',
    '#2CCCE4',
    '#555555',
    '#dce775',
    '#ff8a65',
    '#ba68c8',
  ]
   

  const showSettings = () => setIsSettingsVisible(true);

  const hideSettings = () => setIsSettingsVisible(false);
  
  const updateClockSettings = useCallback((updatedSettings: Partial<Clock>) => {
    setClockSettings(prevSettings => ({ ...prevSettings, ...updatedSettings }));
  }, [])

  return {
    clockSettings,
    isSettingsVisible,
    showSettings,
    hideSettings,
    updateClockSettings,
    textColorOptions
  };
}

const initialClockSettings: Clock = {
  color: '#FFFFFF',
  fontSize: 3,
  isBold: false,
  isItalic: false,
  horizontalAlignment: Alignment.CENTER,
  verticalAlignment: Alignment.CENTER,
}

export const clockFonts = ['']

export default useClock;