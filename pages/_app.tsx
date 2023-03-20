import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import theme from 'styles/theme';
import Header from 'components/Header';
import { globalStyles } from 'styles/Globalstyle';
import { Provider } from 'react-redux';
import store from 'state/store';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Header />
                {globalStyles}
                <Component {...pageProps} />
            </ThemeProvider>
        </Provider>
    );
}
