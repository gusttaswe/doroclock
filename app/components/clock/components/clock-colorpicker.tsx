import { Pipette } from 'lucide-react'
import { createPortal } from 'react-dom';
import { useCallback, useMemo, useState } from 'react';

import { useToggleOverflow } from '@/app/shared/hooks';

import { ZoomIn, ZoomOut } from 'lucide-react'

// Utils
import { isLightColor } from '@/app/shared/utils';
import { ImageColorPicker } from 'react-image-color-picker';

type ClockColorPickerProps = {
  currentColor: string;
  updateColor: (color: string) => void;
  customColors: string[];
  currentImage: string;
}


export function ClockColorPicker({
  currentColor,
  updateColor,
  customColors,
  currentImage
}: ClockColorPickerProps) {
  useToggleOverflow();

  const [isImageSelectorOpen, setIsImageColorPickOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const isLight = useMemo(() => isLightColor(currentColor), [currentColor]);
  const colorBasedTheme = isLight ? 'black' : 'white';

  const handleColorUpdate = useCallback((newColor: string) => {
    updateColor(newColor)
    setIsImageColorPickOpen(false)
  }, [updateColor])


  const decrementZoom = useCallback(() => {
    if (zoom === 0.5) return;
    setZoom(prev => prev - 0.5);
  }, [zoom])

  const incrementZoom = useCallback(() => setZoom(prev => prev + 0.5), []);


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
              border: `1px solid ${colorBasedTheme}`
            }}
            onClick={() => setIsImageColorPickOpen(prev => !prev)}
          >
            <Pipette size={15} color={colorBasedTheme} />
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
        <div 
          data-testid='image-color-picker-container' 
          className='w-screen h-screen absolute z-[100] bg-slate-800/95 flex items-center justify-center'
        >
          <div className='w-[80%] rounded-lg overflow-hidden shadow-2xl'>
            <div className='flex align-middle justify-end gap-4'>
              <button onClick={decrementZoom}>
                <ZoomOut size={15} color='white'/>
              </button>
                <span>{zoom}</span>
              <button onClick={incrementZoom}>
                <ZoomIn  size={15} color='white' />
              </button>
            </div>
            <ImageColorPicker 
              imgSrc={currentImage} 
              onColorPick={(newColor) => handleColorUpdate(newColor)}  
              zoom={zoom}
            />
          </div>
        </div>,
        document.body
      )}
    </>
  )
}