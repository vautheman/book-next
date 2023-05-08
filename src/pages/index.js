import Image from 'next/image'
import Nav from '@/components/Nav'
import Header from '@/components/Header'
import { motion, useIsPresent } from 'framer-motion'

import profile from '../../public/profile.png'
import camera from '../../public/camera.png'
import emojiHand from '../../public/main.png'
import totorEtJadouHomepage from '../../public/totor-et-jadou-homepage.jpg'
import fabulousBg from '../../public/fabulous-bg.png'
import Footer from '@/components/Footer'
import Button from '@/components/Button'
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  const isPresent = useIsPresent()
  return (
    <>
      <Head>
        <title>👋 Victor Autheman - Graphic Design & Developpeur Front-End</title>
        <meta property="og:title" content="👋 Victor Autheman - Graphic Design & Developer Front-End" key="title" />
        <meta name='description' content='My name is Victor Autheman and I’m fascinated by the new technologies and the universe of the web more particularly' />
        <meta name='keywords' content='graphic design developer front end graphiste designer victor autheman' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Nav /> 
      <Header />
      
      <section className='grid md:grid-cols-2 gap-20 container px-10 mt-20'>
        <div className='border-primary border w-max relative bg-purple-dark/30 group hover:-rotate-2 hover:scale-105 transition-all mb-10 md:mb-0'>
          <Image src={profile} width={'350'} height={'100'} alt='profile photo' className='w-full sm:w-auto'/>
          <span className='w-4 h-4 bg-primary absolute right-0 top-0 translate-x-1/2 -translate-y-1/2'></span>
          <span className='w-4 h-4 bg-primary absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2'></span>
          <span className='w-4 h-4 bg-primary absolute left-0 bottom-0 -translate-x-1/2 translate-y-1/2'></span>
          <span className='w-4 h-4 bg-primary absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2'></span>

          <span className='hidden lg:inline absolute pointer-events-none px-6 py-4 bg-white/10 rounded-md top-1/4 right-0 translate-x-2/3 group-hover:right-8 group-hover:top-36 transition-all'>
            <p className='font-body text-xl'>UI Designer</p>
          </span>
          <Image alt='image 3D camera' className='hidden lg:inline absolute pointer-events-none top-2/3 -translate-y-1/3 left-0 -translate-x-1/2 -rotate-12 group-hover:left-10 transition-all' src={camera} width={'400'} height={'100'} />

        </div>


        <div className='flex flex-col justify-center'>
          <h2 className="font-title font-bold text-5xl sm:7xl lg:text-8xl"><span className='text-secondary'>Hi</span> there <Image className='inline mb-6' src={emojiHand} width={'80'} height={'100'} /></h2>
          <p className='font-body max-w-xl text-xl text-body-secondary'>True passionate about new technologies, web design and computer graphics, I am dynamic, motivated and curious and in constant progress in my job. I feed my thirst for knowledge every day to improve my creative spirit and move forward.</p>
        </div>
      </section>

      
      <section className='mt-64 container px-10'>
        <h2 className="font-title font-bold text-7xl md:text-8xl text-center mb-24">My favorite <span className='text-primary'>projects</span></h2>
        <div className='flex flex-wrap justify-center gap-10'>
          <Link href={'https://totor-et-jadou.fr'} target='_blank'>
            <article className='max-w-[550px] w-auto relative group hover:scale-105 hover:-rotate-2 hover:border-2 border-secondary transition-all'>
            
              <header className='relative'>
                <Image src={totorEtJadouHomepage} sizes='100%' alt='totor et jadou Homepage' className='aspect-video'/>
                <span className='absolute w-full h-full bg-black/30 top-0 left-0'></span>
                <h3 className='px-5 py-4 backdrop-blur-lg absolute bottom-0 w-full font-title text-4xl text-center'>Totor & Jadou</h3> 
              </header>

              <div className='px-9 py-7 bg-purple-dark/30'>
                <p className='font-body text-xl text-body-secondary'>Recipe blog developed in next.js, tailwindcss and notion in backend</p>
              </div>

              <span className='w-3 h-3 bg-secondary absolute opacity-0 right-0 top-0 translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 transition-opacity'></span>
              <span className='w-3 h-3 bg-secondary absolute opacity-0 left-0 top-0 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 transition-opacity'></span>
              <span className='w-3 h-3 bg-secondary absolute opacity-0 left-0 bottom-0 -translate-x-1/2 translate-y-1/2 group-hover:opacity-100 transition-opacity'></span>
              <span className='w-3 h-3 bg-secondary absolute opacity-0 right-0 bottom-0 translate-x-1/2 translate-y-1/2 group-hover:opacity-100 transition-opacity'></span>


            </article>
          </Link>
          
          <article className='max-w-[550px] w-auto relative group hover:scale-105 hover:rotate-2 hover:border-2 border-primary transition-all'>
            <header className='relative'>
              <Image src={fabulousBg} sizes='100%' alt='Fabulous bot discord' className='aspect-video'/>
              <span className='absolute w-full h-full bg-black/30 top-0 left-0'></span>
              <h3 className='px-5 py-4 backdrop-blur-lg absolute bottom-0 w-full font-title text-4xl text-center'>Fabulous Bot</h3> 
            </header>

            <div className='px-9 py-7 bg-purple-dark/30'>
              <p className='font-body text-xl text-body-secondary'>Bot discord music and soundboard developed with node.js and discord.js</p>
            </div>

            <span className='w-3 h-3 bg-primary absolute opacity-0 right-0 top-0 translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 transition-opacity'></span>
            <span className='w-3 h-3 bg-primary absolute opacity-0 left-0 top-0 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 transition-opacity'></span>
            <span className='w-3 h-3 bg-primary absolute opacity-0 left-0 bottom-0 -translate-x-1/2 translate-y-1/2 group-hover:opacity-100 transition-opacity'></span>
            <span className='w-3 h-3 bg-primary absolute opacity-0 right-0 bottom-0 translate-x-1/2 translate-y-1/2 group-hover:opacity-100 transition-opacity'></span>


          </article>

        </div>
      </section>

      <Footer />

      <motion.div 
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.6, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 0.6, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="fixed top-0 left-0 right-0 bottom-0 bg-primary z-50"
      />


    </>
  )
}
