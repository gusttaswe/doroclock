import { useState } from "react";

type Clock = {
  color: string;
  fontSize: number;
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
}

export default useClock;