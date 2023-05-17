import MetaChat from '@/utils/MetaChat'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <MetaChat /> 
      </Head>
      {/*<body className='bg-background text-white bg-[url("../../public/bg-noise.png")] bg-blend-overlay bg-repeat-round'>*/}
      <body className='bg-background text-white bg-[url("../../public/bg-noise-filter.png")] bg-repeat'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
