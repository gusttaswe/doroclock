import { fireEvent, render } from "@testing-library/react";
import { ClockItalic } from "./clock-italic";

describe('ClockBold Component', () => {
  it('Should render the Button Correctly', () => {
    const { getByTestId } = render(<ClockItalic isItalic={false} setItalic={() => {}} />);
    const buttonElement = getByTestId('clock-italic');
    expect(buttonElement).toBeInTheDocument();
  })

  it('Should have the correct CSS classes based on the isItalic prop', () => {
    const { getByTestId, rerender } = render(<ClockItalic isItalic={false} setItalic={() => {}} />);
    const buttonElement = getByTestId('clock-italic');
    expect(buttonElement).not.toHaveClass('bg-slate-400');

    rerender(<ClockItalic isItalic={true} setItalic={() => {}} />);
    expect(buttonElement).toHaveClass('bg-slate-400')
  })

  it('Should call the setItalic Function on button click', () => {
    const setItalicMock = jest.fn();
    const { getByTestId } = render(<ClockItalic isItalic={false} setItalic={setItalicMock} />);
    const buttonElement = getByTestId('clock-italic');

    fireEvent.click(buttonElement);
    expect(setItalicMock).toHaveBeenCalled();
  })
})