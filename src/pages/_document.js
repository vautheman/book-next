import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-SXERD9NT1C" strategy="afterInteractive" />
        <Script
          id='google-analytics'
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SXERD9NT1C', {
                page_path: window.location.pathname,
              });
            `,
           }}
         /> 
      </Head>
      {/*<body className='bg-background text-white bg-[url("../../public/bg-noise.png")] bg-blend-overlay bg-repeat-round'>*/}
      <body className='bg-background text-white bg-[url("../../public/bg-noise-filter.png")] bg-repeat'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
