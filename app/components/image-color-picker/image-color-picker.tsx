'use client';

import React, { useEffect, useRef, useState } from 'react';
import { getCanvasCoordinates, getPixelColor } from '@/app/shared/utils';
import { useWindowListener } from '@/app/shared/hooks';

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
    const touch = event.touches[0];
    const canvas = canvasRef.current;
    const context = canvas!.getContext('2d');
    
    const { offsetX, offsetY } = getCanvasCoordinates(touch, canvas!);
    const [red, green, blue] = getPixelColor(context, offsetX, offsetY);
    const rgbColor = `rgb(${red}, ${green}, ${blue})`;

    setColor(rgbColor);
    setPosition({ x: touch.clientX, y: touch.clientY });
  }

  useEffect(() => {
    const context = canvasRef.current!.getContext('2d', { willReadFrequently: true });
    const img = new Image();
    img.onload = () => {
      canvasRef.current!.width = img.width;
      canvasRef.current!.height = img.height;
      context!.drawImage(img, 0, 0);
    };
    img.src = imageBlob;
  }, [imageBlob])

  useWindowListener('touchmove', handleMove, { passive: true })
  useWindowListener('touchend', () => updateColor(color))
    
  return (
    <>
      <div 
        data-testid="image-color-pick-preview"
        hidden={position.x === 0 && position.y === 0}
        className='
          absolute 
          w-10 h-10 
          shadow-lg border-[3px] 
          rounded-full z-[100]
        '
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          backgroundColor: color
        }}
      />
      <canvas 
        data-testid="image-color-pick-canvas"
        className='w-screen h-screen absolute top-0 left-0 z-50 object-cover' 
        ref={canvasRef} 
      />
    </>
  );
}
