import { render, fireEvent, screen } from '@testing-library/react';
import { ClockFonts } from './clock-fonts';

jest.mock('next/font/google');

describe('ClockFonts Component', () => {
  const updateFontMock = jest.fn();
  it('Should render the component correctly without provide the `currentFont`', () => {
    const { getByTestId } = render(
      <ClockFonts 
        currentFont=''
        updateFont={updateFontMock}
      />
    );
    const clockFonts = getByTestId('clock-fonts');
    expect(clockFonts).toBeInTheDocument();

    const fontElements = clockFonts.querySelectorAll('p.font-option');
    expect(fontElements.length).toBeGreaterThan(0);
  });

});