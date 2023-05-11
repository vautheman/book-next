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
import { useState } from 'react'
import { fetcher } from './api/mail'
import moment from 'moment'

export default function Home({works, url}) {
  const [load, setLoad] = useState(-1)
  const isPresent = useIsPresent()

  function ImageLoader({src}) {
    return url + src
  }

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


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-24 max-w-7xl mx-auto">
            {works &&
                works.data.map((work, index) => {
                return (

                  <Link onClick={() => setLoad(index)} className="flex flex-col gap-8 group" href={{pathname: '/work-detail', query: {id: work.id} }} key={work.id}>
                    <header className="relative group-hover:scale-105 transition-transform">
                      <div className="relative">
                        <Image sizes="100%" width={"500"} height={"500"} className="aspect-video object-cover w-full rounded-sm" loader={ImageLoader} src={work.attributes.Image.data.attributes.formats.medium.url} />
                        <Image sizes="100%" width={"500"} height={"500"} className="aspect-video object-cover w-full rounded-sm absolute -z-10 top-0 left-0 blur-3xl opacity-30" loader={ImageLoader} src={work.attributes.Image.data.attributes.formats.thumbnail.url} />
                      </div>
                      {index == 0 &&
                        <span className="absolute top-5 left-5 bg-secondary px-3 py-2 rounded-md text-black font-body">New</span>
                      }
                    </header>
                    <p className="font-body text-sm text-body-secondary">{moment(work.attributes.createdAt).format('DD MMMM YYYY')}</p>
                    <div className="flex flex-col gap-3">
                      <div className="inline-flex justify-between items-center">
                        <h3 className="font-title text-4xl truncate" title={work.attributes.Titre}>{work.attributes.Titre}</h3>
                      
                        <span className="h-5 w-8 flex justify-center items-center">
                        {load === index ? 
                          <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg> :
                          <i class="ri-arrow-right-up-line ri-2x group-hover:text-secondary transition-colors"></i>
                        }
                        </span>
                      </div>
                      <p className="font-body text-xl text-body-secondary truncate">{work.attributes.Description}</p>
                    </div>
                  </Link>
                  )
                })
            }
          </div>
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

export async function getServerSideProps() {

  const worksResponse = await fetcher(`${process.env.STRAPI_URL}/api/realisations/?populate=*&filters[id][$eq][0]=1&filters[id][$eq][1]=7&sort=id%3Adesc`);

  console.log(worksResponse)

  return {
    props: {
      works: worksResponse,
      url: process.env.STRAPI_URL
    }
  }
  
}
