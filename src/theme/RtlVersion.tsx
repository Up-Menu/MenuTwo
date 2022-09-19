import React, { Fragment, useState } from 'react';
// rtl version
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import { themeCreator } from 'src/theme/base';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';

const RtlVersion = ({ children }) => {
    // rtl version
    const curThemeName = localStorage.getItem('appTheme') || 'NebulaFighterTheme';
    const [themeName, _setThemeName] = useState(curThemeName);
    const theme = themeCreator(themeName);

    // Create rtl cache
    const cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: [prefixer, rtlPlugin]
    });
    return (
        <Fragment>
            <CacheProvider value={cacheRtl}>
                <ThemeProvider theme={theme}>
                    {children}
                </ThemeProvider>
            </CacheProvider>
        </Fragment>
    );
};

export default RtlVersion;