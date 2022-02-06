import '../styles/globals.scss';
import type { AppProps as NextAppProps } from "next/app";

type AppProps<P = any> = {
  pageProps: P;
} & Omit<NextAppProps<P>, "pageProps">;

const MyApp = ({ Component , pageProps }: AppProps): JSX.Element => {
  return <Component {...pageProps} />
}

export default MyApp;
