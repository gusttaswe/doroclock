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

  const themeActions = useMemo(
    () => ({
      changeBackground: (background: string) => {
        dispatch({
          type: ThemeActions.CHANGE_BACKGROUND,
          background: background,
        });
      },
      changeThemeColor: () => {
        dispatch({
          type: ThemeActions.CHANGE_THEME_COLOR,
        });
      },
    }),
    [dispatch]
  );

  return (
    <ThemeContext.Provider value={theme}>      
      <ThemeDispatchContext.Provider value={themeActions}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeContext.Provider>
  )
}

export const ThemeContext = createContext<ThemeSettings>(initialThemeSettings)
export const ThemeDispatchContext = createContext<ThemeReducerActions | undefined>(undefined);
