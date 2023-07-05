export default function isLightColor(color: string) {
  const colorMatch = color.includes('#') 
    ? color.replace('#', '').match(/.{2}/g)
    : color.replaceAll(/[^\d+]/g, "").match(/.{3}/g)

  const [red, green, blue] = colorMatch!.map((color) => parseInt(color, 16))

  const luminance = (0.2126 * red + 0.7152 * green + 0.0722 * blue) / 255;
  return luminance > 0.5;
}
