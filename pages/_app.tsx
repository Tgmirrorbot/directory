import { ThemeProvider } from 'next-themes'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div className="flex flex-col justify-between min-h-screen bg-gray-100 dark:bg-gray-900" style={{ backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/001/963/657/original/abstract-technology-background-background-3d-grid-cyber-technology-ai-tech-wire-network-futuristic-wireframe-artificial-intelligence-cyber-security-background-vector.jpg')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <Head>
          <title>GPTsZone</title>
          <meta name="description" content="Explore the world of GPTs with GPTsZone. Discover popular web apps and more." />
          <meta property="og:title" content="GPTsZone" />
          <meta property="og:description" content="Explore the world of GPTs with GPTsZone. Discover popular web apps and more." />
          <meta property="og:image" content="https://example.com/og-image.jpg" />
          <meta property="og:url" content="https://example.com" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:site_name" content="GPTsZone" />
          <meta name="twitter:image:alt" content="GPTsZone" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}