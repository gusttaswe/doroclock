import { fireEvent, render, waitFor } from "@testing-library/react";
import { ClockFontSize } from "./clock-fontsize";
import { debug } from "console";

describe('ClockBold Component', () => {
  it('Should render the Button Correctly', () => {
    const { getByTestId } = render(<ClockFontSize fontSize={1} updateFontSize={() => (1)} />);
    const clockFontsizeElement = getByTestId('clock-fontsize');
    expect(clockFontsizeElement).toBeInTheDocument();
  })
  
  it('Should NOT decrement fontSize if it is already at the minimum value of 1', async () => {
    const updateFontSizeMock = jest.fn();
    const { getByText } = render(<ClockFontSize fontSize={1} updateFontSize={updateFontSizeMock} />);

    const decrementFontSizeButton = getByText('-');
    fireEvent.click(decrementFontSizeButton);

    expect(updateFontSizeMock).not.toHaveBeenCalled();
  })

  it('Should call the updateFontSize function when decrement button is clicked', async () => {
    const updateFontSizeMock = jest.fn();
    const { getByText } = render(<ClockFontSize fontSize={4} updateFontSize={updateFontSizeMock} />);

    const decrementFontSizeButton = getByText('-');
    fireEvent.click(decrementFontSizeButton);

    expect(updateFontSizeMock).toHaveBeenCalledWith(3);
  })

  it('Should call the updateFontSize function when increment button is clicked', async () => {
    const updateFontSizeMock = jest.fn();
    const { getByText } = render(<ClockFontSize fontSize={4} updateFontSize={updateFontSizeMock} />);

    const incrementFontSizeButton = getByText('+');
    fireEvent.click(incrementFontSizeButton);

    expect(updateFontSizeMock).toHaveBeenCalledWith(5);
  })
 
  it('Should call the updateFontSize function when increment button is clicked', async () => {
    const updateFontSizeMock = jest.fn();
    const { getByTestId } = render(<ClockFontSize fontSize={4} updateFontSize={updateFontSizeMock} />);

    const fontSizeInput = getByTestId('clock-fontsize-input');
    fireEvent.change(fontSizeInput, { target: { value: 10 } });

    expect(updateFontSizeMock).toHaveBeenCalledWith(10);
  })
})