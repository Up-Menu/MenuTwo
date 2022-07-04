import React, { useState } from 'react';
import { alpha, createTheme, darken, ThemeProvider } from '@mui/material';
import { themeCreator } from './base';
import { StylesProvider } from '@mui/styles';
import { colors, themeColors } from './schemes/NebulaFighterTheme';

type BoxProps = {
  children: React.ReactNode; // 👈️ type children
};

export const ThemeContext = React.createContext(
  (themeName: string): void => {}
);
export const ColorModeContext = React.createContext({
  toggleColorMode: () => {}
});

const ThemeProviderWrapper = (props: BoxProps) => {
  const curThemeName = localStorage.getItem('appTheme') || 'NebulaFighterTheme';
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const [themeName, _setThemeName] = useState(curThemeName);
  const theme = themeCreator(themeName);
  const setThemeName = (themeName: string): void => {
    localStorage.setItem('appTheme', themeName);
    _setThemeName(themeName);
  };

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      }
    }),
    []
  );

  const _theme = React.useMemo(
    () =>
      createTheme({
        // direction: i18n.dir(),

        palette: {
          mode,

          // text: {
          //   primary: colors.alpha.black[100]
          // },

          background: {
            paper: mode === 'dark' ? colors.alpha.white[100] : '#fff',
            default: mode === 'dark' ? colors.layout.general.bodyBg : '#fff'
          }
        }
      }),
    [mode]
  );
  return (
    <StylesProvider injectFirst>
      <ThemeContext.Provider value={setThemeName}>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <ThemeProvider theme={_theme}>{props.children}</ThemeProvider>
          </ThemeProvider>
        </ColorModeContext.Provider>
      </ThemeContext.Provider>
    </StylesProvider>
  );
};

export default ThemeProviderWrapper;
