import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material';
import { themeCreator } from './base';
import { StylesProvider } from '@mui/styles';
import DarkLight from './DarkLight';

type BoxProps = {
  children: React.ReactNode; // 👈️ type children
};

export const ThemeContext = React.createContext(
  (themeName: string): void => {}
);

const ThemeProviderWrapper = (props: BoxProps) => {
  const curThemeName = localStorage.getItem('appTheme') || 'NebulaFighterTheme';

  const [themeName, _setThemeName] = useState(curThemeName);
  const theme = themeCreator(themeName);
  const setThemeName = (themeName: string): void => {
    localStorage.setItem('appTheme', themeName);
    _setThemeName(themeName);
  };

  return (
    <StylesProvider injectFirst>
      <ThemeContext.Provider value={setThemeName}>
        <ThemeProvider theme={theme}>
          <DarkLight>{props.children}</DarkLight>
        </ThemeProvider>
      </ThemeContext.Provider>
    </StylesProvider>
  );
};

export default ThemeProviderWrapper;
