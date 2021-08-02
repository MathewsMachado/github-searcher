import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from 'styles/global';
import { theme } from 'styles/theme';

type StyleProviderProps = {
  children: ReactNode;
};

export function StyleProvider({ children }: StyleProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
