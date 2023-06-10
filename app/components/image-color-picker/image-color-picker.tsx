'use client';

import React, { useEffect, useRef, useState } from 'react';
import { getCanvasCoordinates, getPixelColor } from '@/app/shared/utils';
import { useToggleOverflow, useWindowListener } from '@/app/shared/hooks';
import { InfoIcon } from 'lucide-react';

type ImageColorPickerProps = {
  updateColor(color: string): void
  imageBlob: string
}
export const  ImageColorPicker = ({
  updateColor,
  imageBlob
}: ImageColorPickerProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [color, setColor] = useState<string>('transparent');
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  const handleMove = (event: TouchEvent) => {
    event.preventDefault();
    const touch = event.touches[0];
    const canvas = canvasRef.current;
    const context = canvas!.getContext('2d');
    
    const { offsetX, offsetY } = getCanvasCoordinates(touch, canvas!);
    const [red, green, blue] = getPixelColor(context!, offsetX, offsetY);
    const rgbColor = `rgb(${red}, ${green}, ${blue})`;

    setColor(rgbColor);
    setPosition({ x: touch.clientX, y: touch.clientY });
  }

  useEffect(() => {
    function handleInitialColor(img: HTMLImageElement) {
      const x = Math.floor(img.width / 2)
      const y = Math.floor(img.height / 2)

      const [red, green, blue] = getPixelColor(context!, x, y);

      const rgbColor = `rgb(${red}, ${green}, ${blue})`;

      setColor(rgbColor);
    } 

    const context = canvasRef.current!.getContext('2d', { willReadFrequently: true });
    const img = new Image();
    img.onload = () => {
      canvasRef.current!.width = img.width;
      canvasRef.current!.height = img.height;
      context!.drawImage(img, 0, 0);
      handleInitialColor(img);
    };
    img.src = imageBlob;
  }, [imageBlob])

  useToggleOverflow();
  useWindowListener('touchmove', handleMove, { passive: true })
  useWindowListener('touchend', () => updateColor(color))
  
  const hasMoved = position.x !== 0 && position.y !== 0;
  return (
    <>
      <div className='
        z-[100] absolute 
        right-3 top-3 
        flex items-center gap-1
        border rounded-md
        bg-slate-500/25
        text-white
        p-2 
      '
      >
        <InfoIcon size={16} />
        <span>Move to pick a color</span>
      </div>

      <div
        className={`
          absolute 
          z-[100]
          ${hasMoved ? 'top-[-90px] left-[-30px]' : 'top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'}
          flex flex-col gap-4
          items-center
        `}
        style={hasMoved ? { transform: `translate(${position.x}px, ${position.y}px)` } : {}}
      >

        <div 
          data-testid="image-color-pick-preview"
          className={`
            w-16 h-16 
            shadow-lg border-[3px] 
            rounded-full
          `}
          style={{
            backgroundColor: color,
          }}
        >
        </div>
        <div 
          className={`
            w-5 h-5 
            shadow-lg border-[3px] 
            rounded-full
          `}
          style={{
            backgroundColor: color,
          }}
        />
      </div>
      <canvas 
        data-testid="image-color-pick-canvas"
        className='w-screen h-screen absolute top-0 left-0 z-50 object-cover' 
        ref={canvasRef} 
      />
    </>
  );
}
