import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";

type ExtendAppProps = AppProps & {
    Component: any;
};

export default function App({ Component, pageProps }: ExtendAppProps) {
    if (Component.getLayout) {
        return (
            <>
                <Component {...pageProps} />
            </>
        );
    }
    return (
        <>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}
