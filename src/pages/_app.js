import '@/styles/globals.css'
import { League_Spartan } from 'next/font/google'
import { Space_Mono } from 'next/font/google'
import 'animate.css'

import { AnimatePresence, motion, useIsPresent } from 'framer-motion'
import { useRouter } from 'next/router'

const leagueSpartan = League_Spartan({
  subsets: ['latin'],
  variable: "--font-title",
  weight: ["700"]
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  variable: "--font-body",
  weight: ["400", "700"]
})


export default function App({ Component, pageProps }) {
  const router = useRouter()
  const pageKey = router.asPath
  const isPresent = useIsPresent()
  return (
    <main className={`${spaceMono.variable} ${leagueSpartan.variable}`}>
      <AnimatePresence mode='wait' initial={false} >
        <motion.div
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0, transition: { duration: 0.8, ease: "circOut"} }}
          exit={{ scaleX: 1, transition: { duration: 0.8, ease: "circIn"} }}
          style={{ originX: isPresent ? 0 : 1 }}
          className="fixed top-0 left-0 right-0 bottom-0 bg-primary z-50"
        />

        <Component key={pageKey} {...pageProps} />
      </AnimatePresence>
    </main>
  )
}
