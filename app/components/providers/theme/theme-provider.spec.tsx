import { fireEvent, render, waitFor } from '@testing-library/react';
import { ThemeContext, ThemeDispatchContext, ThemeProvider } from './theme-provider';

describe('ThemeProvider', () => {
  it('Should be able to change the theme color on button click', async () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <ThemeContext.Consumer>
          {(theme) => (
            <div>
              <div 
                data-testid="color-theme" 
                className={`${theme.isDark ? 'dark-theme' : 'light-theme'}`}
              >Some Content</div>
              <ThemeDispatchContext.Consumer>
                {(dispatch) => (
                  <button 
                    data-testid="theme-changer-button" 
                    onClick={() => dispatch!.changeThemeColor()}
                  >
                    Change Theme
                  </button>
                )}
              </ThemeDispatchContext.Consumer>
            </div>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    )
    
    const isDarkTheme = getByTestId('color-theme');
    const changeThemeButton = getByTestId('theme-changer-button');

    expect(isDarkTheme.className).toBe('light-theme');

    fireEvent.click(changeThemeButton);
    
    expect(isDarkTheme.className).toBe('dark-theme');

    fireEvent.click(changeThemeButton);

    expect(isDarkTheme.className).toBe('light-theme')
  })

  it('Should be able to change the background on change', async () => {
    const newImageBackground = 'new-image.png';
    const { getByTestId } = render(
      <ThemeProvider>
        <ThemeContext.Consumer>
          {(theme) => (
            <div>
              <div data-testid="background-image">{theme.background}</div>
              <ThemeDispatchContext.Consumer>
                {(dispatch) => (
                  <button 
                    data-testid="background-changer-button" 
                    onClick={() => dispatch!.changeBackground(newImageBackground)}
                  >
                    Change Theme
                  </button>
                )}
              </ThemeDispatchContext.Consumer>
            </div>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    )
    
    const background = getByTestId('background-image');
    const backgroundChangerButton = getByTestId('background-changer-button');

    expect(background.textContent).toBe('');

    fireEvent.click(backgroundChangerButton);

    expect(background.textContent).toBe(newImageBackground);
  })
})