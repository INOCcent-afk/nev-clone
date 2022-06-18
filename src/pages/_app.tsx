import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "../styles/globals.css";

import type { AppProps } from "next/app";
import { PageMeta } from "../shared-components/PageMeta";
import { Header } from "../ui/Header";
import { TabbingContextProvider } from "../context/tabContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TabbingContextProvider>
      <div className="bg-aurora pb-20 min-h-screen">
        <PageMeta />
        <Header />
        <Component {...pageProps} />
      </div>
    </TabbingContextProvider>
  );
}

export default MyApp;
