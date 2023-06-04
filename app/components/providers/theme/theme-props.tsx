export type ThemeSettings = {
  isDark: boolean;
  background: string;
};

export interface ThemeReducerActions {
  changeThemeColor(): void;
  changeBackground(background: ThemeSettings['background']): void;
} 