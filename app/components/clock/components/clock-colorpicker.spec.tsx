import { render, fireEvent } from '@testing-library/react';
import { ClockColorPicker } from './clock-colorpicker';

describe('ClockColorPicker Component', () => {
  const customColor = ['#D9E3F0', '#F47373', '#697689'];
  const updateColorMock = jest.fn();

  it('Should render the component correctly without a image', () => {
    const { getByTestId } = render(
      <ClockColorPicker 
        currentColor='#FFFFFF'
        currentImage=''
        customColors={customColor}
        updateColor={updateColorMock}
      />
    );

    const colorElement = getByTestId('clock-color-picker');
    const pickColorButton = getByTestId('pick-color-button');
    expect(colorElement).toBeInTheDocument();
    expect(pickColorButton).toBeInTheDocument();

    const customColorContainer = getByTestId('color-options-container');
    const colorButtonElements = customColorContainer.getElementsByTagName('button');
    expect(colorButtonElements.length).toEqual(customColor.length);
  });

  it('should call the updateColor function with the selected color', async () => {
    const { getByTestId } = render(
      <ClockColorPicker 
        currentColor='#FFFFFF'
        currentImage=''
        customColors={customColor}
        updateColor={updateColorMock}
      />
    );

    const colorPickerContainer = await getByTestId('color-options-container');
    const colorButtonElement = colorPickerContainer.getElementsByTagName('button');

    fireEvent.click(colorButtonElement[1]);

    const newColor = customColor[1];
    expect(updateColorMock).toHaveBeenCalledWith(newColor);
  });
});