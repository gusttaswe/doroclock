import { render, fireEvent, waitFor } from '@testing-library/react';
import { ClockColorPicker } from './ClockColorPicker';

describe('ClockColorPicker Component', () => {

  it('should render the component', () => {
    const { getByTestId } = render(<ClockColorPicker currentColor="#000" updateColor={() => {}} />);
    const colorElement = getByTestId('clock-color-picker');
    expect(colorElement).toBeInTheDocument();
  });

  it('should call the updateColor function with the selected color', async () => {
    const updateColorMock = jest.fn();
    const customColors = ['#000000', '#888000', '#cecece'];

    const { findByTitle } = render(
      <ClockColorPicker currentColor="#000" updateColor={updateColorMock} customColors={customColors} />
    );

    const colorPickerElement = await findByTitle(customColors[1]);

    fireEvent.click(colorPickerElement);

    const newColor = customColors[1];
    await waitFor(() => {
      expect(updateColorMock).toHaveBeenCalledWith(newColor);
    })
  });
});