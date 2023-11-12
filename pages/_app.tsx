import { ThemeProvider } from 'next-themes'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div className="min-h-screen flex flex-col justify-between bg-gray-100 dark:bg-gray-900" style={{ backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/001/963/657/original/abstract-technology-background-background-3d-grid-cyber-technology-ai-tech-wire-network-futuristic-wireframe-artificial-intelligence-cyber-security-background-vector.jpg')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}