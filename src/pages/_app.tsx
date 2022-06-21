import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "../styles/globals.css";

import type { AppProps } from "next/app";
import { PageMeta } from "../shared-components/PageMeta";
import { Header } from "../ui/Header";
import { TabbingContextProvider } from "../context/tabContext";
import { ThemeContextProvider } from "../context/themeContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <TabbingContextProvider>
        <div className="bg-aurora dark:bg-darkBlue pb-20 min-h-screen">
          <PageMeta />
          <Header />
          <Component {...pageProps} />
        </div>
      </TabbingContextProvider>
    </ThemeContextProvider>
  );
}

export default MyApp;
