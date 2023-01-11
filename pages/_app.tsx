import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

type ExtendAppProps = AppProps & {
    Component: any;
};

export default function App({ Component, pageProps }: ExtendAppProps) {
    const queryClient = new QueryClient();
    if (Component.getLayout) {
        return (
            <>
                <QueryClientProvider client={queryClient}>
                    <Component {...pageProps} />
                    <ReactQueryDevtools />
                </QueryClientProvider>
            </>
        );
    }
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
                <ReactQueryDevtools />
            </QueryClientProvider>
        </>
    );
}
