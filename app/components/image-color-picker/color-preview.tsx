import { Coordinates } from "@/app/shared/utils/canvas.util"

type ColorPreviewProps = {
  color: string
}

export const ColorPreview = ({
  color,
}: ColorPreviewProps) => {

  return (
    <div
      className="w-16 h-16 rounded-md z-[100] border-[3px] absolute top-6 right-6"
      style={{
        backgroundColor: color
      }}
    />
  )
}