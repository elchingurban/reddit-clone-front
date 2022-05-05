/* eslint-disable react/react-in-jsx-scope */
import type { AppProps } from 'next/app';

import '../styles/globals.scss';
import 'macro-css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
