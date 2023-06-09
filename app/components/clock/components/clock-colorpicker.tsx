import { Pipette } from 'lucide-react'
import { createPortal } from 'react-dom';
import ImageColorPicker from '../../image-color-picker';
import { useCallback, useState } from 'react';

type ClockColorPicker = {
  currentColor: string;
  updateColor(color: string): void;
  customColors: string[];
  currentImage: string;
}

function isLightColor(color: string) {
  const colorMatch = color.includes('#') 
    ? color.replace('#', '').match(/.{2}/g)
    : color.replaceAll(/[^\d+]/g, "").match(/.{3}/g)

  const [red, green, blue] = colorMatch!.map((color) => parseInt(color, 16))

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
  const isLight = isLightColor(currentColor);
  const pickerTheme = isLight ? 'black' : 'white';

  const handleColorUpdate = useCallback((newColor: string) => {
    updateColor(newColor)
    setIsImageColorPickOpen(false)
  }, [updateColor])

  return (
    <>
      <div 
        id="color-settings" 
        data-testid="clock-color-picker"
        className="flex justify-center gap-2 flex-wrap"
      >
        <div className='flex items-center'>
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
        <div className='flex items-center  gap-2' data-testid="color-options-container">
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
          updateColor={(newColor) => handleColorUpdate(newColor)}  
        />,
        document.body
      )}
    </>
  )
}