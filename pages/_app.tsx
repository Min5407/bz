import "../styles/globals.css";
import { queryClient } from "../src/api";
import { QueryClientProvider } from "@tanstack/react-query";
import { AppProps } from "next/app";
import "../public/static/style.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
