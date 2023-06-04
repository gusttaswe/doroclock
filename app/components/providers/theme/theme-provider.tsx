'use client';

import React, { createContext, useCallback, useMemo, useReducer } from 'react'
import { themeReducer, ThemeActions} from './theme-reducer';
import { ThemeReducerActions, ThemeSettings } from './theme-props';

const initialThemeSettings: ThemeSettings = {
  isDark: false,
  background: '',
}

type ThemeProviderProps = {
  children: React.ReactNode 
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, dispatch] = useReducer(themeReducer, initialThemeSettings);

  const changeThemeColor = useCallback(() => dispatch({ 
    type: ThemeActions.CHANGE_THEME_COLOR,
  }), [dispatch])

  const changeBackground = useCallback((background: ThemeSettings['background']) => dispatch({
    type: ThemeActions.CHANGE_BACKGROUND,
    background: background
  }), [dispatch])

  const ThemeActionHandlers = useMemo(() => ({ 
    changeBackground, changeThemeColor 
  }), [changeThemeColor, changeBackground]);

  return (
    <ThemeContext.Provider value={theme}>      
      <ThemeDispatchContext.Provider value={ThemeActionHandlers}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeContext.Provider>
  )
}

export const ThemeContext = createContext<ThemeSettings>(initialThemeSettings)
export const ThemeDispatchContext = createContext<ThemeReducerActions | undefined>(undefined);
