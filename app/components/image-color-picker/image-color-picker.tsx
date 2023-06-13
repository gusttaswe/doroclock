import React, { useRef } from 'react';
import { useToggleOverflow } from '@/app/shared/hooks';
import { InfoIcon } from 'lucide-react';
import { useCanvas } from '@/app/shared/hooks/useCanvas';
import { ColorPreview } from './color-preview';

type ImageColorPickerProps = {
  onPick(color: string): void
  imageBlob: string,
}
export const  ImageColorPicker = ({
  onPick,
  imageBlob,
}: ImageColorPickerProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { 
    color, 
    coordinates, 
    hasMoved, 
    onTouch,
    onPointerMove
  } = useCanvas(canvasRef, imageBlob)

  useToggleOverflow();

  return (
    <div>
      <ColorPreview color={color} />
      <canvas 
        data-testid="image-color-pick-canvas"
        className='w-screen h-screen absolute top-0 left-0 z-50 object-cover' 
        ref={canvasRef} 
        onTouchMove={onTouch}
        onTouchEnd={() => onPick(color)}
        onPointerMove={onPointerMove}
        onClick={() => onPick(color)}
      />
    </div>
  );
}