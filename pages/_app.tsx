import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Nanum_Gothic } from '@next/font/google'

const font = Nanum_Gothic({
  weight: "400"
})

function MyApp({ Component, pageProps }: AppProps) {
  return <div className={font.className}><Component {...pageProps} /></div>
}

export default MyApp
