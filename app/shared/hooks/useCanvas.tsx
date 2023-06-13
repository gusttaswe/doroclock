import { useCallback, useEffect, useState } from "react";
import { Canvas, Coordinates } from '@/app/shared/utils/canvas.util'


export function useCanvas(
  ref: React.RefObject<HTMLCanvasElement>, 
  image: string
) {
  const [canvas, setCanvas] = useState<Canvas|null>(null);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [color, setColor] = useState<string>('tranparent');

  useEffect(() => {
    const canvasInstance = new Canvas(ref);
    async function initializeCanvas() {
      await canvasInstance.setCanvasImage(image);
    }
    initializeCanvas();
    setCanvas(canvasInstance);
  }, [ref, image])

  const onTouch = (event: React.TouchEvent<HTMLCanvasElement>) => {
    const touch = event.touches[0];
    const coordinates = { x: touch.clientX, y: touch.clientY}
    const color = canvas!.getCanvasColorByCoordinates(coordinates);
    // canvas!.drawZoomPreview(coordinates);

    setColor(color);
    setCoordinates(coordinates);
  }

  const onPointerMove = (event: React.PointerEvent<HTMLCanvasElement>) => {
    event.preventDefault();
    const coordinates = { x: event.clientX, y: event.clientY}
    const color = canvas!.getCanvasColorByCoordinates(coordinates);
    setColor(color);
    setCoordinates(coordinates);
  }

  return {
    coordinates,
    color,
    hasMoved: coordinates.x !== 0 && coordinates.y !== 0,
    onTouch,
    onPointerMove
  }
}