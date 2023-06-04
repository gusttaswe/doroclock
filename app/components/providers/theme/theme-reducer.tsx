'use client';

import { ThemeSettings } from "./theme-props";

export enum ThemeActions {
  CHANGE_THEME_COLOR = 'change_theme',
  CHANGE_BACKGROUND = 'change_background',
}

export const themeReducer = (
  state: ThemeSettings, 
  action: { type: ThemeActions } & Partial<ThemeSettings>
): ThemeSettings => {

  switch(action.type) {
    case ThemeActions.CHANGE_THEME_COLOR:
      return {
        ...state,
        isDark: !state.isDark
      }
    case ThemeActions.CHANGE_BACKGROUND:
      return {
        ...state,
        background: action.background!
      }
    default:
      return state;
  }
};

