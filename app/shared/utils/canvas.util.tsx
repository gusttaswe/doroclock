export type Coordinates = {
  x: number,
  y: number
}

export class Canvas {
  private readonly canvas!: HTMLCanvasElement;
  private readonly context!: CanvasRenderingContext2D;
  constructor(
    canvas: React.RefObject<HTMLCanvasElement>,
  ) {
    this.canvas = canvas.current as HTMLCanvasElement;
    this.context = this.canvas.getContext('2d', { willReadFrequently: true }) as CanvasRenderingContext2D;
  }
  
  public async setCanvasImage(image: any): Promise<void> {
    return new Promise((resolve) => {
      const img = new Image();
  
      img.onload = () => {
        this.setDimensions(img.width, img.height);
        this.context.drawImage(img, 0, 0);
        resolve()
      };
      img.src = image;
    })
  } 

  public setDimensions(width: number, height: number) {
    this.canvas.width = width;
    this.canvas.height = height
  }
  
  public getCanvascoordinates(): Coordinates {
    return { 
      x: Math.floor(this.canvas.width / 2),
      y: Math.floor(this.canvas.height / 2)
    }
  }

  public get2DContext({ willReadFrequently }: { willReadFrequently: boolean}) {
    return this.canvas.getContext('2d', { willReadFrequently: willReadFrequently });
  }

  public getCanvasCoordinates(coordinates: Coordinates) {
    const rect = this.canvas.getBoundingClientRect();
    const scaleX = this.canvas.width / rect.width;
    const scaleY = this.canvas.height / rect.height;
  
    const x = (coordinates.x - rect.left + window.scrollX) * scaleX;
    const y = (coordinates.y - rect.top + window.scrollY) * scaleY;
  
    return { x, y };
  };

  public getCanvasColorByCoordinates (coordinates: Coordinates) {
    const coord = this.getCanvasCoordinates(coordinates);
    return this.getPixelColor(coord);
  }

  public getPixelColor (coordinates: Coordinates) {
    const pixelData = this.context.getImageData(coordinates.x, coordinates.y, 1, 1).data;
    if (pixelData.length < 4) return 'rgb(0,0,0)'; // Return black color if unable to retrieve pixel data
  
    const [red, green, blue] = pixelData;
    return `rgb(${red}, ${green}, ${blue})`;
  };
}