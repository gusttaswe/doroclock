import { Pipette } from 'lucide-react'
import { createPortal } from 'react-dom';
import ImageColorPicker from '../../image-color-picker';
import { useState } from 'react';

type ClockColorPicker = {
  currentColor: string;
  updateColor(color: string): void;
  customColors: string[];
  currentImage: string;
}

function isLightColor(hexColor: string) {
  const [red, green, blue] = hexColor.replace('#', '').match(/.{2}/g)!.map(component => parseInt(component, 16));
  const luminance = (0.2126 * red + 0.7152 * green + 0.0722 * blue) / 255;
  return luminance > 0.5;
}

export function ClockColorPicker({
  currentColor,
  updateColor,
  customColors,
  currentImage
}: ClockColorPicker) {
  const [isImageSelectorOpen, setIsImageColorPickOpen] = useState(false);
  const color = currentColor.replace('#', "");
  const isLight = isLightColor(color);
  const pickerTheme = isLight ? 'black' : 'white';

  return (
    <>
      <div 
        id="color-settings" 
        data-testid="clock-color-picker"
        className="flex justify-center gap-2 flex-wrap"
      >
        <div>
          <button 
            data-testid="pick-color-button"
            className={`w-8 h-8 flex justify-center items-center rounded-md`}
            style={{
              background: currentColor,
              border: `1px solid ${pickerTheme}`
            }}
            onClick={() => setIsImageColorPickOpen(prev => !prev)}
          >
            <Pipette size={15} color={pickerTheme} />
          </button>
        </div>
        <div data-testid="color-options-container">
          { customColors.map((color) => (
            <button 
              key={color} 
              className="w-8 h-8 rounded-md" 
              style={{ backgroundColor: color }} 
              onClick={() => updateColor(color)}
            />
            )) 
          }
        </div>
      </div>

      { (isImageSelectorOpen && currentImage) && createPortal(
        <ImageColorPicker 
          imageBlob={currentImage} 
          updateColor={(newColor) => {
            updateColor(newColor)
            setIsImageColorPickOpen(false)
          }}  
        />,
        document.body
      )}
    </>
  )
}