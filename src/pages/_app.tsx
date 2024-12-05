import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'

const inter = Inter({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
})

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={inter.className}>
            <Component {...pageProps} />
            <ToastContainer
                position="bottom-center"
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
        </main>
    )
}
