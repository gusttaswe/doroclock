import { render, fireEvent, findByTestId } from '@testing-library/react';
import { ClockBackground } from './clock-background';
import { ThemeContext } from '../../providers/theme';

const updateBackgroundMock = jest.fn();

describe('ClockBackground', () => {
  global.URL.createObjectURL = jest.fn(() => 'blob:http://mocked-url.com/41793dc7-00a9-4db6-b5ee-10264501af19')

  it('should render correctly with no background', async () => {
    const { getByTestId, queryByTestId } = render(<ClockBackground updateBackground={updateBackgroundMock} />);
    
    const clockBackground = getByTestId('clock-background');
    const clockBackgroundInput = getByTestId('clock-background-input');
    const clockBackgroundPreview = await queryByTestId('clock-backgroud-preview');

    expect(clockBackground).toBeInTheDocument();
    expect(clockBackgroundInput).toBeInTheDocument();
    expect(clockBackgroundPreview).not.toBeInTheDocument();
  });

  it('should render correctly with a background', () => {
    const backgroundUrl = 'default.png';
    const { getByTestId } = render(
      <ThemeContext.Provider value={{ background: `http://${backgroundUrl}` , isDark: false }}>
        <ClockBackground updateBackground={updateBackgroundMock} />
      </ThemeContext.Provider>
    );

    const backgroundPreview = getByTestId('clock-background-preview');
    expect(backgroundPreview).toBeInTheDocument();
    expect(backgroundPreview.getAttribute('src')).toMatch(backgroundUrl)
  })

  it('should update the background when a file is selected', async () => {
    const file = new File(['image content'], 'image.png', { type: 'image/png' });

    const backgroundUrl = 'default.png';
    const { getByTestId, debug, rerender } = render(
      <ThemeContext.Provider value={{ background: `http://${backgroundUrl}` , isDark: false }}>
        <ClockBackground updateBackground={updateBackgroundMock} />
      </ThemeContext.Provider>
    );
    
    const backgroundPreview = getByTestId('clock-background-preview');
    expect(backgroundPreview.getAttribute('src')).toMatch(backgroundUrl);
    
    const fileInput = getByTestId('clock-background-input');
    fireEvent.change(fileInput, { target: { files: [file] } });
    expect(updateBackgroundMock).toHaveBeenCalledWith(expect.stringContaining('blob:'));
  });

});