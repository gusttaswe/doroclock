import { render, fireEvent } from '@testing-library/react';
import { ClockBold } from './ClockBold';

describe('ClockBold Component', () => {
  it('Should render the button correctly', () => {
    const { getByTestId } = render(<ClockBold isBold={false} setBold={() => {}} />);
    const buttonElement = getByTestId('clock-bold');
    expect(buttonElement).toBeInTheDocument();
  });

  it('Should have the correct CSS classes based on the isBold prop', () => {
    const { getByTestId, rerender } = render(<ClockBold isBold={false} setBold={() => {}} />);
    const buttonElement = getByTestId('clock-bold');
    expect(buttonElement).not.toHaveClass('bg-slate-400');

    rerender(<ClockBold isBold={true} setBold={() => {}} />);
    expect(buttonElement).toHaveClass('bg-slate-400');
  });

  it('Should call the setBold function on button click', () => {
    const setBoldMock = jest.fn();
    const { getByTestId } = render(<ClockBold isBold={false} setBold={setBoldMock} />);
    const buttonElement = getByTestId('clock-bold');

    fireEvent.click(buttonElement);
    expect(setBoldMock).toHaveBeenCalled();
  });
});