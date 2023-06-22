import 'react-toastify/dist/ReactToastify.css';

import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import { IconSprite } from '@/components';
import { defaultTheme, GlobalStyles } from '@/styles';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyles />
    <IconSprite />
    <Component {...pageProps} />
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  </ThemeProvider>
);

export default MyApp;
