import { Coordinates } from "@/app/shared/utils/canvas.util"

type ColorPreviewProps = {
  hasMoved: boolean,
  coordinates: Coordinates,
  color: string,
  canvasRef: HTMLCanvasElement;
}

export const ZoomPreview = ({
  color,
  coordinates,
  hasMoved,
  canvasRef
}: ColorPreviewProps) => {
  const { x, y } = coordinates;
  const zoomFactor = 2; // Adjust the zoom factor as needed
  
  const teste = () => {
    if (!canvasRef) return {};
    const { width, height } = canvasRef.getBoundingClientRect();
    
    return {
      backgroundImage: `url(${canvasRef.toDataURL()})`,
      backgroundPosition: `-${(x * 2) - 31}px -${(y * 2) - 30}px`,
      backgroundSize: `${width * 2}px ${height * 2}px`,
      backgroundRepeat: 'no-repeat'
    }
  }

  const lala = teste()

  return (
    <>
      { canvasRef && (
        <div
          className={`
            absolute 
            z-[100]
            ${hasMoved ? 'top-[-90px] left-[-30px]' : 'top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'}
            flex flex-col gap-4
            items-center
          `}
          style={hasMoved ? { transform: `translate(${coordinates.x}px, ${coordinates.y}px)` } : {}}
        >
          <div 
            data-testid="image-color-pick-preview"
            className={`
              w-16 h-16 
              shadow-lg border-[3px] 
              rounded-full
            `}
            style={{
              ...lala,
              borderColor: color,
            }}
          >
            <div 
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: color}}
            />
          </div>
        </div>
      )}
    </>

  )
}