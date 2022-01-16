import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: `"TTNorms", "Roboto", "Helvetica", "Arial", sans-serif`,
    },
  },
});

function App({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={theme}>
    <Head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Head>
    <Component {...pageProps} />;
  </ThemeProvider>;
}

export default App;
