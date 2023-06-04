import { TwitterPicker } from "react-color";

type ClockColorPicker = {
  currentColor: string;
  updateColor(color: string): void;
  customColors?: string[];
}

export function ClockColorPicker({
  currentColor,
  updateColor,
  customColors
}: ClockColorPicker) {

  return (
    <div id="color-settings" data-testid="clock-color-picker">
      <TwitterPicker
        colors={customColors}
        className="mt-4"
        triangle="hide"
        color={currentColor}
        onChangeComplete={({ hex }) => updateColor(hex)}
      />
    </div>
  )
}