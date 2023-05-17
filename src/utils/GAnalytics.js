import Script from "next/script";

export default function GAnalytics() {
  return (
    <>
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
    </>
  )
}
