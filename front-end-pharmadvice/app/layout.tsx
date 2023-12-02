'use client'

import './assets/style/globals.css';
import React, { ReactNode } from 'react'
import { Prompt } from 'next/font/google';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { persist, store } from '@/app/store/store'
import { PersistGate } from 'redux-persist/integration/react'
import Head from 'next/head'
// import Script from 'next/script'

const prompt = Prompt({
  weight: ['500', '600', '700'],
  subsets: ['latin'],
});

interface RootLayoutProps {
  children: ReactNode;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})


const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
    <body className={prompt.className} suppressHydrationWarning={true}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <PersistGate persistor={persist} loading={null}>
            {/*<Script src="https://api-maps.yandex.ru/2.1/?apikey=36371c2f-4533-4c0b-baec-3d139420e57f&lang=ru_RU" strategy="beforeInteractive" />*/}
            <Head>
              <script src={'https://api-maps.yandex.ru/2.1/?apikey=36371c2f-4533-4c0b-baec-3d139420e57f&lang=ru_RU'} />
            </Head>
            {children}
          </PersistGate>
        </Provider>
      </QueryClientProvider>
    </body>
    </html>
  );
}

export default RootLayout;
