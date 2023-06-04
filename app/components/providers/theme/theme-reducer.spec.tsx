import { ThemeActions, themeReducer } from "./theme-reducer"

describe('ThemeReducer', () => {


  it('Should be able to change isDark property when CHANGE_THEME_COLOR action is dispatched', () => {
    const initialState = {
      isDark: true,
      background: ''
    }
    const action = { type: ThemeActions.CHANGE_THEME_COLOR };

    const newState = themeReducer(initialState, action);
    expect(newState.isDark).toBe(false)

    const secondState = themeReducer(newState, action);
    expect(secondState.isDark).toBe(true)
  })

  it('Should be able to change background property when CHANGE_BACKGROUND action is dispatched', () => {
    const initialState = {
      isDark: true,
      background: ''
    };
    
    const backgroundImage = 'my_image.png';
    const action = { type: ThemeActions.CHANGE_BACKGROUND, background: backgroundImage };

    const newState = themeReducer(initialState, action);
    expect(newState.background).toBe(backgroundImage)
  })

  it('Should NOT change the current state when the action dispatched doesnt exists', () => {
    const initialState = {
      isDark: true,
      background: ''
    };
    
    const backgroundImage = 'my_image.png';
    const action: any = { type: 'UNRECOGNIZED_ACTION', background: backgroundImage };

    const newState = themeReducer(initialState, action);
    
    expect(newState).toEqual(initialState);
    expect(newState.background).not.toBe(backgroundImage)
  })
})