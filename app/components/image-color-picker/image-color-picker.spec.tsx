import { fireEvent, render } from "@testing-library/react"
import { ImageColorPicker } from "./image-color-picker"

describe('ImageColorPicker Component', () => {
  const updateColorMock = jest.fn();
  const imageBlog = "https://example.png"

  it('Should render the Component correctly', () => {
    const { getByTestId } = render(
      <ImageColorPicker imageBlob={imageBlog} updateColor={updateColorMock} />
    );

    const canvas = getByTestId('image-color-pick-canvas');
    const colorPreview = getByTestId('image-color-pick-preview');

    expect(canvas).toBeInTheDocument()
    expect(colorPreview).toBeInTheDocument()
  })

  it('Should change preview color on touch move', () => {
    const { getByTestId } = render(
      <ImageColorPicker imageBlob={imageBlog} updateColor={updateColorMock} />
    );

    const canvas = getByTestId('image-color-pick-canvas');
    
    fireEvent.touchMove(canvas, {
      touches: [{ clientX: 100, clientY: 200 }]
    })

    const colorPreview = getByTestId('image-color-pick-preview');
    expect(colorPreview.style.backgroundColor).toMatch('rgb(0, 0, 0)')
  })

  it('Should trigger updateColor on touch end', () => {
    const { getByTestId } = render(
      <ImageColorPicker imageBlob={imageBlog} updateColor={updateColorMock} />
    );

    const canvas = getByTestId('image-color-pick-canvas');
    
    fireEvent.touchMove(canvas, {
      touches: [{ clientX: 100, clientY: 200 }]
    })

    fireEvent.touchEnd(canvas)

    expect(updateColorMock).toBeCalledTimes(1)
    expect(updateColorMock).toBeCalledWith('rgb(0, 0, 0)')
  })
})