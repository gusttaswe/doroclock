export const getCanvasCoordinates = (event: any, canvas: HTMLCanvasElement) => {
  const rect = canvas!.getBoundingClientRect();
  const scaleX = canvas!.width / rect.width;
  const scaleY = canvas!.height / rect.height;

  const offsetX = (event.clientX - rect.left) * scaleX;
  const offsetY = (event.clientY - rect.top) * scaleY;

  return { offsetX, offsetY };
};

export const getPixelColor = (context: any, x: any, y: any) => {
  const pixelData = context.getImageData(x, y, 1, 1).data;
  const [red, green, blue] = pixelData;
  return [red, green, blue];
};
