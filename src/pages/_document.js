import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-background text-white bg-[url("../../public/bg-noise.png")] bg-blend-overlay'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
