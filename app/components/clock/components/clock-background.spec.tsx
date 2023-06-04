import { render, fireEvent, screen } from '@testing-library/react';
import { ClockBackground } from './clock-background';

describe('ClockBackground', () => {
  global.URL.createObjectURL = jest.fn(() => 'mocked-url.com');
  
  it('should update the background when a file is selected', async () => {
    const updateBackgroundMock = jest.fn();

    const file = new File(['image content'], 'image.png', { type: 'image/png' });

    const { getByTestId } = render(<ClockBackground background="" updateBackground={updateBackgroundMock} />);
    
    const fileInput = getByTestId('clock-backround-input');
    fireEvent.change(fileInput, { target: { files: [file] } });
    expect(updateBackgroundMock).toHaveBeenCalledWith(expect.any(String));
  });

  it('should display the background image when provided', () => {
    const updateBackgroundMock = jest.fn();
    render(<ClockBackground background="image-url.png" updateBackground={updateBackgroundMock} />);

    const backgroundImage = screen.get('img');
    expect(backgroundImage).toHaveAttribute('src', 'image-url.png');
  });

  // it('should display a default background when no background is provided', () => {
  //   const updateBackgroundMock = jest.fn();
  //   render(<ClockBackground background="" updateBackground={updateBackgroundMock} />);

  //   const defaultBackground = screen.getByTestId('default-background');
  //   expect(defaultBackground).toBeInTheDocument();
  // });
});